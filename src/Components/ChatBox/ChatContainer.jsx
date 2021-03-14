import { useImport } from "../../Imports/imports";

let selectedPersonDraftChange = "";

const ChatContainer = ({ chatMode, chatInputText, selectedChatContent }) => {
  const {
    ChatTitleBar,
    ChatList,
    useEffect,
    ChatInput,
    AttachFileIcon,
    ChatDetailPanel,
    dispatch,
    actionChatBoxCloseClicked,
    actionChatMenuBarClicked,
    actionSearchIconClicked,
    actionInputChange,
    actionChatInputKeyPress,
    getSelectedPersonItems,
    getShowableChats,
    actionCancelEditChatClicked,
    actionAddNewChatClicked,
    actionConfirmEditChatClicked,
    actionSelectedPersonDraftChange,
    selectedPersonId,
    searchInputText,
    persons,
    useMemo,
    searchMode,
    TelegramIcon,
    Paper,
    MicNoneIcon,
    IconButton,
    styles,
  } = useImport();

  const { details, chats } = useMemo(
    () => getSelectedPersonItems(selectedPersonId, persons),
    [selectedPersonId, persons, getSelectedPersonItems]
  );

  const showableChats = useMemo(
    () => getShowableChats(chats, searchInputText, searchMode),
    [chats, searchInputText, searchMode, getShowableChats]
  );

  useEffect(() => {
    const timeout = chatInputText === "" ? 0 : 3000;
    if (!chatMode) {
      clearTimeout(selectedPersonDraftChange);
      selectedPersonDraftChange = setTimeout(
        () => dispatch(actionSelectedPersonDraftChange()),
        timeout
      );
    }
  }, [chatInputText, actionSelectedPersonDraftChange, chatMode, dispatch]);

  const condition = chatInputText || selectedChatContent;
  const { avatar, personName } = details;

  const { container } = styles().chatInput;

  return (
    <div>
      <ChatTitleBar
        avatar={avatar}
        personName={personName}
        onCloseChat={() => dispatch(actionChatBoxCloseClicked())}
        onChatMenuClick={() => dispatch(actionChatMenuBarClicked())}
        onSearchIconClick={() => dispatch(actionSearchIconClicked("chats"))}
      />

      <div className="chat-container">
        <ChatList showableChats={showableChats} />

        {chatMode && (
          <ChatDetailPanel
            chatMode={chatMode}
            selectedChatContent={selectedChatContent}
            editCloseClicked={() => dispatch(actionCancelEditChatClicked())}
          />
        )}
        <div>
          <Paper className="input-container" style={container}>
            <span className="textarea-icon">
              <IconButton onClick={() => console.log("Pin Clicked")}>
                <AttachFileIcon />
              </IconButton>
            </span>
            <ChatInput
              chatInputText={chatInputText}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  if (chatInputText) dispatch(actionChatInputKeyPress());
                }
              }}
              onInputChange={(e) =>
                dispatch(actionInputChange(e.target.value, "chatInputText"))
              }
            />
            <span className="textarea-icon">
              {condition ? (
                <IconButton
                  onClick={() =>
                    dispatch(
                      chatMode === "edit"
                        ? actionConfirmEditChatClicked()
                        : actionAddNewChatClicked()
                    )
                  }
                >
                  <TelegramIcon color="primary" />
                </IconButton>
              ) : (
                <IconButton onClick={() => console.log("Mic Clicked")}>
                  <MicNoneIcon />
                </IconButton>
              )}
            </span>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;

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
    classNames: { chatInputContainer },
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
    const timeout = chatInputText === "" ? 0 : 2000;
    if (chatMode !== "edit") {
      //FIXME clearTimeOut ID need to fix .
      clearTimeout(selectedPersonDraftChange);
      selectedPersonDraftChange = setTimeout(
        () =>
          dispatch(
            actionSelectedPersonDraftChange({ chatInputText, selectedPersonId })
          ),
        timeout
      );
    }
  }, [
    chatInputText,
    selectedPersonId,
    actionSelectedPersonDraftChange,
    chatMode,
    dispatch,
  ]);

  // useEffect(() => {
  //   const element = document.getElementsByClassName("chat-list-ul")[0];
  //   element.scrollTo(0, element.scrollHeight);
  // }, [chats]);

  const condition = chatInputText || selectedChatContent;
  const { avatar, personName } = details;

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
          <Paper className={chatInputContainer}>
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
                  chatInputText &&
                    dispatch(
                      chatMode === "edit"
                        ? actionConfirmEditChatClicked()
                        : actionAddNewChatClicked()
                    );
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

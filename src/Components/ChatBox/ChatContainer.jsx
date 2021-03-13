import { useImport } from "../../Imports/imports";

function ChatContainer({ chatMode, chatInputText, chatContent }) {
  const {
    ChatTitleBar,
    ChatList,
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

  const condition = chatInputText || chatContent;
  const { avatar, personName, draft } = details;

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
            chatContent={chatContent}
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
              draft={draft}
              onKeyPress={(e) =>
                e.key === "Enter" && dispatch(actionChatInputKeyPress())
              }
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
}

export default ChatContainer;

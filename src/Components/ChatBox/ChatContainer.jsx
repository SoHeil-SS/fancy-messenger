import { useImport } from "../../Imports/imports";

function ChatContainer({ chatMode, chatInputText, chatContent }) {
  const {
    ChatTitleBar,
    ChatList,
    ChatInput,
    AttachFileIcon,
    ChatDetailPanel,
    dispatch,
    closeClicked,
    onChatMenuClick,
    searchInputState,
    onInputChange,
    onKeyPress,
    handleShowableChats,
    handleSelectedPersonItems,
    editCloseClicked,
    addClicked,
    saveClicked,
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
    () => handleSelectedPersonItems(selectedPersonId, persons),
    [selectedPersonId, persons, handleSelectedPersonItems]
  );

  const showableChats = useMemo(
    () => handleShowableChats(chats, searchInputText, searchMode),
    [chats, searchInputText, searchMode, handleShowableChats]
  );

  const condition = chatInputText || chatContent;
  const { avatar, personName, draft } = details;

  const { container } = styles.chatInput;

  return (
    <div>
      <ChatTitleBar
        avatar={avatar}
        personName={personName}
        onCloseChat={() => dispatch(closeClicked())}
        onChatMenuClick={() => dispatch(onChatMenuClick())}
        onSearchIconClick={() => dispatch(searchInputState("chats"))}
      />

      <div className="chat-container">
        <ChatList showableChats={showableChats} />

        {chatMode && (
          <ChatDetailPanel
            chatMode={chatMode}
            chatContent={chatContent}
            editCloseClicked={() => dispatch(editCloseClicked())}
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
              onKeyPress={(e) => e.key === "Enter" && dispatch(onKeyPress())}
              onInputChange={(e) =>
                dispatch(onInputChange(e.target.value, "chatInputText"))
              }
            />
            <span className="textarea-icon">
              {condition ? (
                <IconButton
                  onClick={() =>
                    dispatch(chatMode === "edit" ? saveClicked() : addClicked())
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

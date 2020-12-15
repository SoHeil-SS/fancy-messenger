import { useImport } from "../../imports";

function ChatContainer({
  details,
  chats,
  chatInputText,
  isEditing,
  editingChat,
}) {
  const {
    ChatTitleBar,
    ChatList,
    ChatInput,
    SendIcon,
    PinIcon,
    Editing,
    dispatch,
    closeClicked,
    onChatMenuClick,
    onSearchClick,
    onInputChange,
    onKeyPress,
    editCloseClicked,
    addClicked,
    saveClicked,
  } = useImport();

  const condition = !!chatInputText;

  return (
    <div>
      <ChatTitleBar
        avatar={details.avatar}
        personName={details.personName}
        onCloseChat={() => dispatch(closeClicked())}
        onChatMenuClick={() => dispatch(onChatMenuClick())}
        onSearchClick={() => dispatch(onSearchClick("chats"))}
      />

      <div className="chatDetail_chat-box__3peJu">
        <ChatList chats={chats} />
        <Editing
          isEditing={isEditing}
          editingChat={editingChat}
          editCloseClicked={() => dispatch(editCloseClicked())}
        />
        <ChatInput
          chatInputText={chatInputText}
          draft={details.draft}
          spanIcon={condition ? <SendIcon /> : <PinIcon />}
          onKeyPress={(e) => dispatch(onKeyPress(e))}
          onInputChange={(e) =>
            dispatch(onInputChange(e.target.value, "chatInputText"))
          }
          onSpanClick={
            condition
              ? () => dispatch(isEditing ? saveClicked() : addClicked())
              : () => console.log("Pin Clicked")
          }
        />
      </div>
    </div>
  );
}

export default ChatContainer;

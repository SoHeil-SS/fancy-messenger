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
    Editing,
    useDispatch,
    closeClicked,
    onChatMenuClick,
    onSearchClick,
    onInputChange,
    onKeyPress,
  } = useImport();
  const dispatch = useDispatch();

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
        <Editing isEditing={isEditing} editingChat={editingChat} />
        <ChatInput
          chatInputText={chatInputText}
          draft={details.draft}
          isEditing={isEditing}
          onInputChange={(e) =>
            dispatch(onInputChange(e.target.value, "chatInputText"))
          }
          onKeyPress={(e) => dispatch(onKeyPress(e))}
        />
      </div>
    </div>
  );
}

export default ChatContainer;

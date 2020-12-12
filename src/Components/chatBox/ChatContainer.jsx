import { useImport } from "../../imports";

function ChatContainer({
  details,
  chats,
  chatInputText,
  isEditing,
  editingChat,
}) {
  const {
    React,
    useDispatch,
    ChatTitleBar,
    ChatList,
    ChatInput,
    Editing,
    closeClicked,
  } = useImport();
  const dispatch = useDispatch();

  return (
    <div>
      <ChatTitleBar
        avatar={details.avatar}
        personName={details.personName}
        onCloseChat={() => dispatch(closeClicked())}
      />
      <div className="chatDetail_chat-box__3peJu">
        <ChatList chats={chats} />
        <Editing isEditing={isEditing} editingChat={editingChat} />
        <ChatInput
          chatInputText={chatInputText}
          draft={details.draft}
          isEditing={isEditing}
        />
      </div>
    </div>
  );
}

export default ChatContainer;

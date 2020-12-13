import { useImport } from "../../imports";

function ChatList({ chats }) {
  const { handleGetTime, ChatItem, menuId, useContextMenu } = useImport();
  const { show } = useContextMenu({
    id: menuId,
  });
  const chatList = chats.map((chat) => (
    <ChatItem
      key={chat.chatId}
      chatId={chat.chatId}
      self={chat.self}
      person={chat.person}
      chatTime={handleGetTime(chat.chatTime, "getHours", "getMinutes", ":")}
      chatDate={handleGetTime(chat.chatTime, "getMonth", "getDate", "/")}
      show={show}
    />
  ));
  return (
    <>
      <ul className="chatDetail_messages-panel__3aOw8">{chatList}</ul>
    </>
  );
}

export default ChatList;

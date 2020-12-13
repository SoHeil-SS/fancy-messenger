import { useImport } from "../../imports";

import { useContextMenu } from "react-contexify";

function ChatList({ chats }) {
  const { handleGetTime, ChatItem, menuId } = useImport();
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

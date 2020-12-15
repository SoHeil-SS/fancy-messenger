import { useImport } from "../../imports";

function ChatList({ chats }) {
  const { handleGetTime, ChatItem, show, handleDisplayMenu } = useImport();

  const chatList = chats.map((chat) => {
    const { chatId, self, person, chatTime } = chat;

    return (
      <ChatItem
        key={chatId}
        self={self}
        person={person}
        chatTime={handleGetTime(chatTime, "getHours", "getMinutes", ":")}
        chatDate={handleGetTime(chatTime, "getMonth", "getDate", "/")}
        onContextMenu={(e) =>
          handleDisplayMenu(e, show, chatId, self ? self : person)
        }
      />
    );
  });

  return <ul className="chatDetail_messages-panel__3aOw8">{chatList}</ul>;
}

export default ChatList;

import { useImport } from "../../Imports/imports";

function ChatList({ showableChats }) {
  const { handleGetTime, ChatItem, show, handleDisplayMenu } = useImport();

  const chatList = showableChats.map((chat) => {
    const { chatId, self, person, chatTime } = chat;

    return (
      <ChatItem
        key={chatId}
        self={self}
        person={person}
        chatTime={handleGetTime(chatTime, "getHours", "getMinutes", ":")}
        chatDate={handleGetTime(chatTime, "getMonth", "getDate", "/")}
        onContextMenu={(e) =>
          handleDisplayMenu(e, show, chatId, self || person)
        }
      />
    );
  });

  return <ul className=" chat-list-ul ">{chatList}</ul>;
}

export default ChatList;

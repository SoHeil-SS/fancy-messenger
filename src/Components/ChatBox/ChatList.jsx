import { useImport } from "../../Imports/imports";

const ChatList = ({ showableChats }) => {
  const {
    getTimeFromMilliseconds,
    ChatItem,
    show,
    setDisplayMenu,
  } = useImport();

  const chatList = showableChats.map((chat) => {
    const { chatId, self, person, chatTime } = chat;

    return (
      <ChatItem
        key={chatId}
        self={self}
        person={person}
        chatTime={getTimeFromMilliseconds(
          chatTime,
          "getHours",
          "getMinutes",
          ":"
        )}
        chatDate={getTimeFromMilliseconds(chatTime, "getMonth", "getDate", "/")}
        onContextMenu={(e) => setDisplayMenu(e, show, chatId, self || person)}
      />
    );
  });

  return <ul className=" chat-list-ul ">{chatList}</ul>;
};

export default ChatList;

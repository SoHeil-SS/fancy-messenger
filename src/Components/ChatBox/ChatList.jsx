import { useImport } from "../../Imports/imports";

const ChatList = ({ showableChats }) => {
  const {
    getTimeFromMilliseconds,
    ChatItem,
    show,
    setDisplayMenu,
    Grid,
    classNames: { chatListChatsGrid },
  } = useImport();

  const chatList = showableChats.map((chat) => {
    const { chatId, self, person, chatTime } = chat;

    return (
      <ChatItem
        key={chatId}
        message={self || person}
        justify={self ? "flex-end" : "flex-start"}
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

  return (
    <Grid container className={chatListChatsGrid}>
      {chatList}
    </Grid>
  );
};

export default ChatList;

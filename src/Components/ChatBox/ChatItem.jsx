import { useImport } from "../../Imports/imports";

const ChatItem = ({ self, person, chatTime, chatDate, onContextMenu }) => {
  const {
    Paper,
    ListItem,
    ListItemText,
    classNames: { chatItemPaper },
  } = useImport();

  return (
    <>
      {self && (
        <Paper
          elevation={3}
          className={chatItemPaper}
          onContextMenu={onContextMenu}
        >
          <ListItem>
            <ListItemText className="chatDetail_me__2ZOxv">{self}</ListItemText>
            <ListItemText className="message-time-self ">
              {chatTime} {chatDate}
            </ListItemText>
          </ListItem>
        </Paper>
      )}
      {
        <Paper elevation={3}>
          <ListItem>
            <ListItemText className="chatDetail_me__2ZOxv">
              {person}
            </ListItemText>
            <ListItemText className="message-time-self ">
              {chatTime} {chatDate}
            </ListItemText>
          </ListItem>
        </Paper>
      }
    </>
  );
};

export default ChatItem;

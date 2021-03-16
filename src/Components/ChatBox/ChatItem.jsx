import { useImport } from "../../Imports/imports";

const ChatItem = ({ message, chatTime, chatDate, justify, onContextMenu }) => {
  const {
    Paper,
    Grid,
    Typography,
    classNames: { chatItemPaper },
  } = useImport();

  return (
    <>
      <Grid container justify={justify}>
        <Paper
          className={chatItemPaper}
          elevation={1}
          onContextMenu={onContextMenu}
        >
          <Typography>{message}</Typography>
          <Typography>
            {chatTime} {chatDate}
          </Typography>
        </Paper>
      </Grid>
    </>
  );
};

export default ChatItem;

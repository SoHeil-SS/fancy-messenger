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
      <Grid
        item
        container
        style={{ height: "fit-content", margin: "0 0" }}
        justify={justify}
      >
        <Paper
          elevation={1}
          style={{
            cursor: "pointer",
            width: "auto",
            maxWidth: "60%",
            padding: "10px",
            // marginTop: "1%",
          }}
          onContextMenu={onContextMenu}
        >
          <Typography className="">{message}</Typography>
          <Typography className="">
            {chatTime} {chatDate}
          </Typography>
        </Paper>
      </Grid>
    </>
  );
};

export default ChatItem;

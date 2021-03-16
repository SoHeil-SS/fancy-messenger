import { useImport } from "../../Imports/imports";

const DeleteNotify = ({ notificationState, deleteMessage }) => {
  const {
    Button,
    Snackbar,
    IconButton,
    CloseIcon,
    actionCloseNotificationClicked,
  } = useImport();

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={notificationState}
        autoHideDuration={3000}
        onClose={actionCloseNotificationClicked}
        message={deleteMessage}
        action={
          <>
            <Button
              color="secondary"
              size="large"
              onClick={actionCloseNotificationClicked}
            >
              UNDO
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={actionCloseNotificationClicked}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </div>
  );
};

export default DeleteNotify;

// const handleClose = (event, reason) => {
//   if (reason === "clickaway") {
//     return;
//   }

//   setOpen(false);
// };

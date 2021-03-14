import { useImport } from "../../Imports/imports";

const DeleteMessageSnack = ({ notificationState }) => {
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
        message="Message deleted successfully."
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

export default DeleteMessageSnack;

// const handleClose = (event, reason) => {
//   if (reason === "clickaway") {
//     return;
//   }

//   setOpen(false);
// };

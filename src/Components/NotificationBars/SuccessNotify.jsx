import { useImport } from "../../Imports/imports";

const SuccessNotify = ({
  notificationState,
  handleSnackClose,
  successMessage,
}) => {
  const { MuiAlert, Snackbar } = useImport();

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={notificationState}
      autoHideDuration={6000}
      onClose={handleSnackClose}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={handleSnackClose}
        severity="success"
      >
        {successMessage}
      </MuiAlert>
    </Snackbar>
  );
};

// const handleClose = (event, reason) => {
//   if (reason === "clickaway") {
//     return;
//   }

//   setOpen(false);
// };

export default SuccessNotify;

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function SuccessSnack({ snackState, handleSnackClose }) {
  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpen(false);
  // };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={snackState}
      autoHideDuration={6000}
      onClose={handleSnackClose}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={handleSnackClose}
        severity="success"
      >
        Message edited successfully.
      </MuiAlert>
    </Snackbar>
  );
}

/* <Alert severity="error">This is an error message!</Alert>
<Alert severity="warning">This is a warning message!</Alert>
<Alert severity="info">This is an information message!</Alert>
<Alert severity="success">This is a success message!</Alert> */

export default SuccessSnack;

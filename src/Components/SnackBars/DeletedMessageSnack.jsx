import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

function DeleteMessageSnack({ snackState, handleCloseSnack }) {
  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpen(false);
  // };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={snackState}
        autoHideDuration={3000}
        onClose={handleCloseSnack}
        message="Note archived"
        action={
          <>
            <Button color="secondary" size="large" onClick={handleCloseSnack}>
              UNDO
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleCloseSnack}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </div>
  );
}

export default DeleteMessageSnack;

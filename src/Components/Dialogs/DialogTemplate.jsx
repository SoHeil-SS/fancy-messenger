import { useImport } from "../../Imports/imports";

function DialogTemplate({
  titleContent,
  mainContent,
  actionContent,
  dialogMode,
}) {
  const {
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
    // DialogContentText,
    DraggablePaper,
    Button,
    onCloseModalClick,
    dispatch,
  } = useImport();

  return (
    <>
      <Dialog
        open={dialogMode}
        onClose={() => dispatch(onCloseModalClick())}
        PaperComponent={DraggablePaper}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          {titleContent}
        </DialogTitle>

        <DialogContent>
          {mainContent}
          {/* <DialogContentText>ssss</DialogContentText> */}
        </DialogContent>

        <DialogActions>
          {actionContent.map((action, index) => (
            <Button
              key={index}
              onClick={action.onClick}
              color={action.color}
              autoFocus={action.autoFocus}
            >
              {action.text}
            </Button>
          ))}
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DialogTemplate;
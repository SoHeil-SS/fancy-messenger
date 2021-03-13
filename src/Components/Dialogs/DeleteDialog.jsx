import { useImport } from "../../Imports/imports";

function DeleteDialog({ dialogMode }) {
  const {
    DialogTemplate,
    dialog,
    dialogActionInitializer,
    dispatch,
    actionConfirmDeleteChatClicked,
  } = useImport();

  const actionContent = dialogActionInitializer(
    ["Cancel", "Delete"],
    ["primary", "secondary"],
    [true, false],
    [
      () => console.log("Canceled"),
      () => dispatch(actionConfirmDeleteChatClicked()),
    ]
  );

  return (
    <DialogTemplate
      dialogMode={dialogMode}
      titleContent={dialog.deleteMessage}
      actionContent={actionContent}
    />
  );
}

export default DeleteDialog;

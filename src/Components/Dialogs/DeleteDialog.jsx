import { useImport } from "../../Imports/imports";

const DeleteDialog = ({ dialogMode }) => {
  const {
    DialogTemplate,
    dialog: {
      messages: { deleteMessage },
    },
    getDialogActionInitializer,
    dispatch,
    actionConfirmDeleteChatClicked,
  } = useImport();

  const actionContent = getDialogActionInitializer(
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
      titleContent={deleteMessage}
      actionContent={actionContent}
    />
  );
};

export default DeleteDialog;

import { useImport } from "../../Imports/imports";

const DraggablePaper = (props) => {
  const { Draggable, Paper } = useImport();

  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
};

export default DraggablePaper;

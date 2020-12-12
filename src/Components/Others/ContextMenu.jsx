import { useImport } from "../../imports";
import { Item, Menu, Separator, theme } from "react-contexify";

function ContextMenu({ menuId }) {
  const {
    React,
    useDispatch,
    copyClicked,
    editClicked,
    deleteClicked,
    forwardClicked,
  } = useImport();
  const dispatch = useDispatch();

  function handleContextClick({ event, props, data, triggerEvent }) {
    const { id, text } = props;
    switch (event.currentTarget.id) {
      case "Copy":
        dispatch(copyClicked(text));
        break;

      case "Edit":
        dispatch(editClicked(id));
        break;

      case "Delete":
        dispatch(deleteClicked(id));
        break;

      case "Forward":
        dispatch(forwardClicked(id));
        break;

      default:
        break;
    }
  }

  return (
    <div>
      <main>
        <Menu id={menuId} theme={theme.light}>
          <Item id="Copy" onClick={handleContextClick}>
            Copy
          </Item>
          <Separator />
          <Item id="Edit" onClick={handleContextClick}>
            Edit
          </Item>
          <Separator />
          <Item id="Delete" onClick={handleContextClick}>
            Delete
          </Item>
          <Separator />
          <Item id="Forward" onClick={handleContextClick}>
            Forward
          </Item>
        </Menu>
      </main>
    </div>
  );
}

export default ContextMenu;

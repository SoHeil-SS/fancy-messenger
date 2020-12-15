import { useImport } from "../../Imports/imports";

function ContextMenu({ menuId }) {
  const {
    dispatch,
    copyClicked,
    editClicked,
    deleteClicked,
    forwardClicked,
    Item,
    Menu,
    theme,
  } = useImport();

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
        dispatch(forwardClicked(text));
        break;

      default:
        break;
    }
  }

  return (
    <div>
      <main>
        <Menu id={menuId} theme={theme.dark}>
          <Item id="Copy" onClick={handleContextClick}>
            Copy
          </Item>
          <Item id="Edit" onClick={handleContextClick}>
            Edit
          </Item>
          <Item id="Delete" onClick={handleContextClick}>
            Delete
          </Item>
          <Item id="Forward" onClick={handleContextClick}>
            Forward
          </Item>
        </Menu>
      </main>
    </div>
  );
}

export default ContextMenu;

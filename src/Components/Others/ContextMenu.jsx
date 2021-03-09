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
      case "copy":
        dispatch(copyClicked(text));
        break;

      case "edit":
        dispatch(editClicked(id));
        break;

      case "delete":
        dispatch(deleteClicked(id));
        break;

      case "forward":
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
          <Item id="edit" onClick={handleContextClick}>
            Edit
          </Item>
          <Item id="copy" onClick={handleContextClick}>
            Copy Text
          </Item>
          <Item id="forward" onClick={handleContextClick}>
            Forward Message
          </Item>
          <Item id="delete" onClick={handleContextClick}>
            Delete Message
          </Item>
        </Menu>
      </main>
    </div>
  );
}

export default ContextMenu;

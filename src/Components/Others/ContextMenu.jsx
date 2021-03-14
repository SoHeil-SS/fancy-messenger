import { useImport } from "../../Imports/imports";

const ContextMenu = () => {
  const {
    dispatch,
    actionEditChatClicked,
    actionDeleteChatClicked,
    actionForwardChatClicked,
    Item,
    Menu,
    theme,
    menuId,
    setCopyChatClicked,
  } = useImport();

  const handleContextClick = ({ event, props, data, triggerEvent }) => {
    const { id, text } = props;
    switch (event.currentTarget.id) {
      case "copy":
        setCopyChatClicked(text);
        break;

      case "edit":
        dispatch(actionEditChatClicked(id));
        break;

      case "delete":
        dispatch(actionDeleteChatClicked(id));
        break;

      case "forward":
        dispatch(actionForwardChatClicked(text));
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <main>
        <Menu id={menuId} theme={theme.light}>
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
};

export default ContextMenu;

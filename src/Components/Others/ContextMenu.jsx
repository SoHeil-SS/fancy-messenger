// React components =>
import React from "react";
import { Item, Menu, Separator, theme } from "react-contexify";
// Custom scripts =>
import { useDispatch } from "../../stateManager/dispatch";
import {
  copyClicked,
  deleteClicked,
  editClicked,
  forwardClicked,
} from "../../stateManager/actionCreator";

function ContextMenu({ menuId }) {
  const dispatch = useDispatch();

  function handleItemClick({ event, props, data, triggerEvent }) {
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
        console.log("what the heck ???");
    }
  }

  return (
    <div>
      <main>
        {/* <Portal> */}
        <Menu id={menuId} theme={theme.light}>
          <Item id="Copy" onClick={handleItemClick}>
            Copy
          </Item>
          <Separator />
          <Item id="Edit" onClick={handleItemClick}>
            Edit
          </Item>
          <Separator />
          <Item id="Delete" onClick={handleItemClick}>
            Delete
          </Item>
          <Separator />
          <Item id="Forward" onClick={handleItemClick}>
            Forward
          </Item>
        </Menu>
        {/* </Portal> */}
      </main>
    </div>
  );
}

export default ContextMenu;

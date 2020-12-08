import React from "react";
import { Item, Menu, Separator, theme } from "react-contexify";
import "react-contexify/dist/ReactContexify.min.css";

// import Portal from "../Portal";

function ContextMenu({ handleItemClick, menuId }) {
  return (
    <div>
      <main>
        {/* <Portal> */}
        <Menu id={menuId} theme={theme.light}>
          <Item id="remove" onClick={handleItemClick}>
            Delete
          </Item>
          <Separator />
          <Item id="share" onClick={handleItemClick}>
            Edit
          </Item>
          <Separator />
          <Item id="email" onClick={handleItemClick}>
            Forward
          </Item>
        </Menu>
        {/* </Portal> */}
      </main>
    </div>
  );
}

export default ContextMenu;

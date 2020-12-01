import React from "react";

import { useDispatch } from "../../stateManager/dispatch";
import { editCloseClicked } from "../../stateManager/actionCreator";

import Button from "../Others/Button";

function Editing({ isEditing, editingChat }) {
  const dispatch = useDispatch();
  return (
    <>
      {isEditing && (
        //TODO grid style for Editing
        <div className="chatDetail_input-section__2qoiR">
          <div style={{ paddingLeft: "10px" }}>
            <span style={{ fontSize: "30px" }}>
              edit message :
              <Button
                style={{
                  float: "right",
                  position: "relative",
                  fontSize: "30px",
                }}
                event={() => dispatch(editCloseClicked())}
                text="X"
              />
            </span>
            {/* <br /> */}
            <p style={{ float: "left" }}>{editingChat} </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Editing;

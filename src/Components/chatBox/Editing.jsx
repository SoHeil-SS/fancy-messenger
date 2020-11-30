import React from "react";
import { editClicked } from "../../stateManager/actionCreator";
import { useDispatch } from "../../stateManager/dispatch";

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
                event={() => dispatch(editClicked())}
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

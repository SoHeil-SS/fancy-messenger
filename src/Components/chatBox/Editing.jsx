import React from "react";

import Button from "../Others/Buttton";

function Editing({ isEditing, editingChat, onEditing }) {
  console.log(editingChat);
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
                event={onEditing}
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

import React from "react";
import Button from "../Others/Buttons/Button";
import Buttons from "../Others/Buttons/Buttons";

function chatItem({
  id,
  onContextMenu,
  self,
  person,
  chatTime,
  chatDate,
  onDelete,
  onEdit,
  onForward,
}) {
  // "message" classNames from Haleh <3 .

  const style = {
    width: "fit-content",
    height: "30px",
    fontSize: "25px",
  };

  const buttonsValue = [
    { text: "Delete", event: onDelete, style: style },
    { text: "Edit", event: onEdit, style: style },
    { text: "Forward", event: onForward, style: style },
  ];

  const listStyle = {
    display: "block",
    width: "fit-content",
    padding: "10px",
    border: "1px black solid",
    borderRadius: "15px 15px 15px 0",
    fontSize: "1.6rem",
  };

  return (
    <div id={id} onContextMenu={onContextMenu}>
      {self && (
        <div className="message-row you-message hoverItem">
          <div className="message-content">
            <div className="message-text">
              <li className="chatDetail_me__2ZOxv">{self}</li>
              <Buttons values={buttonsValue} />
            </div>
            <div className="message-time">
              {chatDate} {chatTime}
            </div>
          </div>
        </div>
      )}
      {person && (
        <>
          <div>
            <li style={listStyle}>
              {person}
              <Button event={onDelete} text="Delete" style={style} />
              <Button event={onForward} text="Forward" style={style} />
            </li>
          </div>
          <div className="message-time">
            {chatTime} {chatDate}
          </div>
        </>
      )}
    </div>
  );
}

export default chatItem;

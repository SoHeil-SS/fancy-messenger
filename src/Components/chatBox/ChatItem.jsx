import React from "react";
import Buttons from "../Others/Buttons";

function chatItem({
  me,
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

  const values = [
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
    <>
      {me && (
        <div className="message-row you-message hoverItem">
          <div className="message-content">
            <div className="message-text">
              <li className="chatDetail_me__2ZOxv">{me}</li>
              <Buttons values={values} />
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
              <Buttons values={values} />
            </li>
          </div>
          <div className="message-time">
            {chatTime} {chatDate}
          </div>
        </>
      )}
    </>
  );
}

export default chatItem;

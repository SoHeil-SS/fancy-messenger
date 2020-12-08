import React from "react";
import { listStyle } from "../../constants";

function chatItem({ chatId, displayMenu, self, person, chatTime, chatDate }) {
  // "message" classNames from Haleh <3 .
  return (
    <div>
      {self && (
        <div className="message-row you-message hoverItem">
          <div
            className="message-content"
            id={chatId}
            onContextMenu={displayMenu}
          >
            <div className="message-text">
              <li className="chatDetail_me__2ZOxv">{self}</li>
            </div>
          </div>
          <div className="message-time message-content">
            {chatDate} {chatTime}
          </div>
        </div>
      )}
      {person && (
        <>
          <div onContextMenu={displayMenu} id={chatId}>
            <li style={listStyle}>{person}</li>
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

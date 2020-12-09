import React from "react";
import { handleDisplayMenu } from "../../stateManager/eventHandlers";

function chatItem({ chatId, self, person, chatTime, chatDate, show }) {
  return (
    <div>
      {self && (
        <div className="message-row you-message hoverItem">
          <div
            className="message-content"
            id={chatId}
            onContextMenu={(e) => handleDisplayMenu(e, show)}
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
          <div onContextMenu={(e) => handleDisplayMenu(e, show)} id={chatId}>
            <li className="liPerson">{person}</li>
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

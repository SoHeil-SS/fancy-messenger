import React from "react";
import { handleDisplayMenu } from "../../stateManager/eventHandlers";

function chatItem({ chatId, self, person, chatTime, chatDate, show }) {
  return (
    <div>
      {self && (
        <div className="message-row self-message hoverItem">
          <div
            className="message-content-self"
            id={chatId}
            onContextMenu={(e) => handleDisplayMenu(e, show)}
          >
            <div className="message-text">
              <li className="chatDetail_me__2ZOxv">{self}</li>
              <div className="message-time-self ">
                {chatDate} {chatTime}
              </div>
            </div>
          </div>
        </div>
      )}
      {person && (
        <>
          <div
            onContextMenu={(e) => handleDisplayMenu(e, show)}
            id={chatId}
            className="message-row you-message hoverItem "
          >
            <div className="message-content-person">
              <div className=" liPerson message-text">
                <li>{person}</li>

                <div className="message-time-person">
                  {chatTime} {chatDate}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default chatItem;

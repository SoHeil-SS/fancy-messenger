function chatItem({ self, person, chatTime, chatDate, onContextMenu }) {
  return (
    <div onContextMenu={onContextMenu}>
      {self && (
        <div className="message-row self-message hoverItem">
          <div className="message-content-self">
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
        <div>
          <div className="message-row you-message hoverItem ">
            <div className="message-content-person">
              <div className=" liPerson message-text">
                <li>{person}</li>
                <div className="message-time-person">
                  {chatTime} {chatDate}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default chatItem;

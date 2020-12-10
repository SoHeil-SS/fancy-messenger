import React from "react";

function PersonListItem({
  personId,
  selectedPersonId,
  avatar,
  personName,
  lastChatText,
  draft,
  lastChatTime,
  lastChatDate,
  unreadChatCounter,
  onPersonClick,
}) {
  return (
    <div
      className={
        personId === selectedPersonId
          ? "listItem_list-item__1mnZB listItem_selected__3Q6PN  "
          : "listItem_list-item__1mnZB listItem_bg "
      }
      onClick={onPersonClick}
    >
      <div className="listItem_avatar__FkMqU ">
        <div className="avatar__avatar__oTaCM">
          <img src={avatar} alt={personName} />
        </div>
      </div>
      <div className="listItem_name__2wTlg">{personName}</div>
      <div className="listItem_message__3ZiRE" style={{ overflow: "hidden" }}>
        {draft ? (
          <>
            <span style={{ color: "red" }}>draft</span>: {draft}
          </>
        ) : (
          lastChatText
        )}
      </div>
      <div className="listItem_time__3-xft">
        {lastChatTime} {lastChatDate}
      </div>
      <div className="listItem_info__3vSL0">
        {unreadChatCounter && <div>{unreadChatCounter}</div>}
      </div>
    </div>
  );
}

export default PersonListItem;

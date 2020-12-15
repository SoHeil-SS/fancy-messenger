function PersonListItem({
  personItemClassName,
  draft,
  avatar,
  personName,
  lastChatText,
  lastChatTime,
  unreadChatCounter,
  onPersonClick,
}) {
  return (
    <div className={personItemClassName} onClick={onPersonClick}>
      <div className="listItem_avatar__FkMqU ">
        <div className="avatar__avatar__oTaCM">
          <img src={avatar} alt={personName} />
        </div>
      </div>
      <div className="listItem_name__2wTlg">{personName}</div>
      <div className="listItem_message__3ZiRE">
        {draft ? (
          <>
            <span className="person-list-item-span-draft">draft</span>: {draft}
          </>
        ) : (
          lastChatText
        )}
      </div>
      <div className="listItem_time__3-xft">{lastChatTime}</div>
      <div className="listItem_info__3vSL0">
        {unreadChatCounter && <div>{unreadChatCounter}</div>}
      </div>
    </div>
  );
}

export default PersonListItem;

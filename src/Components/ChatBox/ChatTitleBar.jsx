import { useImport } from "../../Imports/imports";

function ChatTitleBar({
  avatar,
  personName,
  onCloseChat,
  onChatMenuClick,
  onSearchIconClick,
}) {
  const { SearchIcon, CloseIcon, ThreeDotIcon } = useImport();

  return (
    <div className="titleBar_title-bar__3W5uP">
      <div className="titleBar_first__PIBdf">
        <CloseIcon onClick={onCloseChat} />
      </div>
      <div className="titleBar_middle__220jH">
        <div className="chatDetail_app-title__1xgvb">
          <div className="avatar__avatar__oTaCM">
            <img src={avatar} alt={personName} />
          </div>
          <div className="chatDetail_name__LVfMo">{personName}</div>
          <span className="lastSeenSpan">last seen 666 minutes ago</span>
        </div>
      </div>
      <div className="titleBar_last__2vQ77">
        <SearchIcon onClick={onSearchIconClick} />
        <ThreeDotIcon onClick={onChatMenuClick} />
      </div>
    </div>
  );
}

export default ChatTitleBar;

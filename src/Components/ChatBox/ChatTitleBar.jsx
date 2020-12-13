import { useImport } from "../../imports";

function ChatTitleBar({
  avatar,
  personName,
  onCloseChat,
  onChatMenuClick,
  onSearchClick,
}) {
  const { SearchIcon, CloseIcon, ThreeDotIcon } = useImport();

  return (
    <div className="titleBar_title-bar__3W5uP">
      <div className="titleBar_first__PIBdf">
        <CloseIcon onCloseChat={onCloseChat} />
      </div>
      <div className="titleBar_middle__220jH">
        <div className="chatDetail_app-title__1xgvb">
          <div className="avatar__avatar__oTaCM">
            <img src={avatar} alt={personName} />
          </div>
          <div className="chatDetail_name__LVfMo">{personName}</div>
          <div style={{ fontSize: "17px", padding: "10px" }}>
            <span>last seen 36 minutes ago</span>
          </div>
        </div>
      </div>
      <div className="titleBar_last__2vQ77">
        <SearchIcon onSearchClick={onSearchClick} />

        <ThreeDotIcon onChatMenuClick={onChatMenuClick} />
      </div>
    </div>
  );
}

export default ChatTitleBar;

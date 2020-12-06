import React from "react";

function ChatTitleBar({ avatar, personName, onCloseChat }) {
  return (
    <div className="titleBar_title-bar__3W5uP">
      <div className="titleBar_first__PIBdf">
        <svg
          onClick={onCloseChat}
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="times"
          className=" hoverClose svg-inline--fa fa-times fa-w-11 chatDetail_pointer__1gYpZ fa-lg pointer"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 352 512"
          color="#009578"
        >
          <path
            fill="currentColor"
            d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
          ></path>
        </svg>
      </div>
      <div className="titleBar_middle__220jH">
        <div className="chatDetail_app-title__1xgvb">
          <div className="avatar__avatar__oTaCM">
            <img src={avatar} alt={personName} />
          </div>
          <div className="chatDetail_name__LVfMo">{personName}</div>
        </div>
      </div>
      <div className="titleBar_last__2vQ77">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="ellipsis-v"
          className="svg-inline--fa fa-ellipsis-v fa-w-6 fa-lg pointer"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 192 512"
          color="#009588"
        >
          <path
            fill="currentColor"
            d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default ChatTitleBar;

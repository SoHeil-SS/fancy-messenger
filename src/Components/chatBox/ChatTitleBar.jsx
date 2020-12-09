import React from "react";

import Path from "../Others/Path";
import Svg from "../Others/Svg";

import { svgPath } from "../../constants";

function ChatTitleBar({ avatar, personName, onCloseChat }) {
  return (
    <div className="titleBar_title-bar__3W5uP">
      <div className="titleBar_first__PIBdf">
        <Svg
          viewBox="0 0 448 512"
          className=" hoverClose svg-inline--fa fa-times fa-w-11 chatDetail_pointer__1gYpZ fa-lg pointer"
          dataIcon="times"
          onClick={onCloseChat}
        >
          <Path path={svgPath.times} />
        </Svg>
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
        <Svg
          viewBox="0 0 192 512"
          className="svg-inline--fa fa-ellipsis-v fa-w-6 fa-lg pointer"
          dataIcon="ellipsis - v"
        >
          <Path path={svgPath.ellipsis} />
        </Svg>
      </div>
    </div>
  );
}

export default ChatTitleBar;

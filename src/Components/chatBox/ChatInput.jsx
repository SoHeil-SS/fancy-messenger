import React from "react";
import { useDispatch } from "../../stateManager/dispatch";

import {
  addClicked,
  saveClicked,
  onInputChange,
  onKeyPress,
} from "../../stateManager/actionCreator";

import Svg from "../Others/Svg";
import { svgPath } from "../../constants";
import Path from "../Others/Path";

function ChatInput({ chatContent, isEditing }) {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="chatDetail_input-section__2qoiR">
        <input
          type="text"
          placeholder="Write a message..."
          onChange={(e) => dispatch(onInputChange(e.target.value))}
          value={chatContent}
          onKeyPress={(e) => dispatch(onKeyPress(e))}
        />
        <button
          disabled={chatContent ? false : true}
          onClick={() => dispatch(!isEditing ? addClicked() : saveClicked())}
          style={{ border: "0px", fontSize: "20px", padding: "11px" }}
        >
          <Svg
            viewBox="0 0 448 512"
            className="svg-inline--fa fa-paperclip fa-w-14 fa-lg chatDetail_send__1Gwlf chatDetail_pointer__1gYpZ"
            dataIcon="paperclip"
          >
            <Path path={chatContent ? svgPath.send : svgPath.pin} />
          </Svg>
        </button>
      </div>
    </div>
  );
}

export default ChatInput;

import React from "react";
import { useDispatch } from "../../stateManager/dispatch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  addClicked,
  saveClicked,
  onInputChange,
  onKeyPress,
} from "../../stateManager/actionCreator";

function ChatInput({ chatContent, isEditing }) {
  const dispatch = useDispatch();
  return (
    <div>
      <button>
        <i class="fas fa-paper-plane"></i>
      </button>

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
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="paperclip"
          className="svg-inline--fa fa-paperclip fa-w-14 fa-lg chatDetail_send__1Gwlf chatDetail_pointer__1gYpZ"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          color="#009588"
          onClick={() => dispatch(!isEditing ? addClicked() : saveClicked())}
        >
          <FontAwesomeIcon icon="coffee" />
        </button>
      </div>
    </div>
  );
}

export default ChatInput;

import React from "react";
import {
  addClicked,
  editClicked,
  onInputChange,
  onKeyPress,
} from "../../stateManager/actionCreator";
import { useDispatch } from "../../stateManager/dispatch";

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
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="paperclip"
          className="svg-inline--fa fa-paperclip fa-w-14 fa-lg chatDetail_send__1Gwlf chatDetail_pointer__1gYpZ"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          color="#009588"
          onClick={() => dispatch(!isEditing ? addClicked() : editClicked())}
        >
          <path
            fill="currentColor"
            d={
              chatContent
                ? "M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
                : // else :
                  "M43.246 466.142c-58.43-60.289-57.341-157.511 1.386-217.581L254.392 34c44.316-45.332 116.351-45.336 160.671 0 43.89 44.894 43.943 117.329 0 162.276L232.214 383.128c-29.855 30.537-78.633 30.111-107.982-.998-28.275-29.97-27.368-77.473 1.452-106.953l143.743-146.835c6.182-6.314 16.312-6.422 22.626-.241l22.861 22.379c6.315 6.182 6.422 16.312.241 22.626L171.427 319.927c-4.932 5.045-5.236 13.428-.648 18.292 4.372 4.634 11.245 4.711 15.688.165l182.849-186.851c19.613-20.062 19.613-52.725-.011-72.798-19.189-19.627-49.957-19.637-69.154 0L90.39 293.295c-34.763 35.56-35.299 93.12-1.191 128.313 34.01 35.093 88.985 35.137 123.058.286l172.06-175.999c6.177-6.319 16.307-6.433 22.626-.256l22.877 22.364c6.319 6.177 6.434 16.307.256 22.626l-172.06 175.998c-59.576 60.938-155.943 60.216-214.77-.485z"
            }
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default ChatInput;

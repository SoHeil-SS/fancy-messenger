import { useImport } from "../../imports";

function ChatInput({ chatInputText, isEditing }) {
  const {
    React,
    svgPath,
    Svg,
    Path,
    useDispatch,
    addClicked,
    saveClicked,
    onInputChange,
    onKeyPress,
  } = useImport();
  const dispatch = useDispatch();
  return (
    <div>
      <div className="chatDetail_input-section__2qoiR">
        <input
          type="text"
          placeholder="Write a message..."
          onChange={(e) => dispatch(onInputChange(e.target.value))}
          value={chatInputText}
          onKeyPress={(e) => dispatch(onKeyPress(e))}
        />
        <span
          onClick={
            chatInputText
              ? () => dispatch(!isEditing ? addClicked() : saveClicked())
              : () => console.log("Pin Clicked")
          }
          style={{ border: "0px", fontSize: "20px", padding: "11px" }}
        >
          <Svg
            viewBox="0 0 448 512"
            className="svg-inline--fa fa-paperclip fa-w-14 fa-lg chatDetail_send__1Gwlf chatDetail_pointer__1gYpZ"
            dataIcon="paperclip"
          >
            <Path path={chatInputText ? svgPath.send : svgPath.pin} />
          </Svg>
        </span>
      </div>
    </div>
  );
}

export default ChatInput;

import { useImport } from "../../imports";

function ChatInput({ chatInputText, isEditing, onInputChange, onKeyPress }) {
  const {
    useDispatch,
    PinIcon,
    SendIcon,
    addClicked,
    saveClicked,
  } = useImport();
  const dispatch = useDispatch();
  const condition = !!chatInputText;
  return (
    <div>
      <div className="chatDetail_input-section__2qoiR">
        <input
          type="text"
          placeholder="Write a message..."
          onChange={onInputChange}
          value={chatInputText}
          onKeyPress={onKeyPress}
        />
        <span
          onClick={
            condition
              ? () => dispatch(isEditing ? saveClicked() : addClicked())
              : () => console.log("Pin Clicked")
          }
          style={{
            border: "0px",
            fontSize: "20px",
            padding: "11px",
            cursor: "pointer",
          }}
        >
          {condition ? <SendIcon /> : <PinIcon />}
        </span>
      </div>
    </div>
  );
}

export default ChatInput;

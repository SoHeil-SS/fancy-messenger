import { useImport } from "../../Imports/imports";

const ChatInput = ({
  chatInputText,
  onKeyPress,
  onInputChange,
  onSpanClick,
}) => {
  const { TextField, styles } = useImport();

  const { textarea } = styles();

  return (
    <TextField
      className="chat-input"
      id="standard-multiline-flexible"
      label={!chatInputText ? "Write a message..." : " "}
      multiline
      style={textarea}
      rowsMax={8}
      onChange={onInputChange}
      value={chatInputText}
      onKeyPress={onKeyPress}
    />
  );
};

export default ChatInput;

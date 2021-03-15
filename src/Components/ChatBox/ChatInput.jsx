import { useImport } from "../../Imports/imports";

const ChatInput = ({ chatInputText, onKeyPress, onInputChange }) => {
  const {
    TextField,
    classNames: { textarea },
  } = useImport();

  return (
    <TextField
      id="standard-multiline-flexible"
      label={!chatInputText ? "Write a message..." : " "}
      multiline
      className={textarea}
      rowsMax={8}
      autoFocus
      onChange={onInputChange}
      value={chatInputText}
      onKeyPress={onKeyPress}
    />
  );
};

export default ChatInput;

function ChatInput({
  chatInputText,
  spanIcon,
  onKeyPress,
  onInputChange,
  onSpanClick,
}) {
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
        <span className="span-input-area" onClick={onSpanClick}>
          {spanIcon}
        </span>
      </div>
    </div>
  );
}

export default ChatInput;

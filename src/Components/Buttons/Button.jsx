function Button({ text, event, style }) {
  return (
    <button style={style} onClick={event}>
      {text}
    </button>
  );
}

export default Button;

import { Button } from "react-bootstrap";

function ChatDetailPanel({ chatContent, editCloseClicked, chatMode }) {
  return (
    <div className="editContainer">
      <div>
        <span className="editContainerSpan">{chatMode} message</span>
        <Button
          className="editContainerButton btn btn-dark"
          onClick={editCloseClicked}
        >
          X
        </Button>
      </div>
      <p className="editContainerPara">{chatContent} </p>
    </div>
  );
}

export default ChatDetailPanel;

import { Button } from "react-bootstrap";

function Editing({ chatContent, editCloseClicked, chatMode }) {
  return (
    <>
      {(chatMode === "forward" || chatMode === "edit") && (
        <div className="editContainer">
          <div>
            <span className="editContainerSpan">
              {chatMode === "forward" ? "Forward" : "Edit"} message
            </span>
            <Button
              className="editContainerButton btn btn-dark"
              onClick={editCloseClicked}
            >
              X
            </Button>
          </div>
          <p className="editContainerPara">{chatContent} </p>
        </div>
      )}
    </>
  );
}

export default Editing;

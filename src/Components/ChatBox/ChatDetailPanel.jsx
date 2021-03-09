import { Button } from "react-bootstrap";

function Editing({ chatContent, editCloseClicked, mode }) {
  return (
    <>
      {(mode === "edit" || mode === "forwardContentToPanel") && (
        <div className="editContainer">
          <div>
            <span className="editContainerSpan">
              {mode === "forwardContentToPanel" ? "Forward" : "Edit"} message
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

import { Button } from "react-bootstrap";

function Editing({ chatContent, editCloseClicked }) {
  return (
    <>
      {chatContent && (
        <div className="editContainer">
          <div>
            <span className="editContainerSpan">edit message :</span>
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

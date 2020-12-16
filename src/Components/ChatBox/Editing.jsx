import { Button } from "react-bootstrap";

function Editing({ isEditing, editingChat, editCloseClicked }) {
  return (
    <>
      {isEditing && (
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
          <p className="editContainerPara">{editingChat} </p>
        </div>
      )}
    </>
  );
}

export default Editing;

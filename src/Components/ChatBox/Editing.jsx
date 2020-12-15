function Editing({ isEditing, editingChat, editCloseClicked }) {
  return (
    <>
      {isEditing && (
        <div className="editContainer">
          <div>
            <span className="editContainerSpan">edit message :</span>
            <button className="editContainerButton" onClick={editCloseClicked}>
              X
            </button>
          </div>
          <p className="editContainerPara">{editingChat} </p>
        </div>
      )}
    </>
  );
}

export default Editing;

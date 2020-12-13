import Button from "../Buttons/Button";
import { useImport } from "../../imports";

function Editing({ isEditing, editingChat }) {
  const { useDispatch, editCloseClicked } = useImport();
  const dispatch = useDispatch();
  return (
    <>
      {isEditing && (
        <div className="chatDetail_input-section__2qoiR">
          <div style={{ paddingLeft: "10px" }}>
            <span style={{ fontSize: "30px" }}>
              edit message :
              <Button
                style={{
                  float: "right",
                  position: "relative",
                  fontSize: "30px",
                }}
                event={() => dispatch(editCloseClicked())}
                text="X"
              />
            </span>
            <p style={{ float: "left" }}>{editingChat} </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Editing;

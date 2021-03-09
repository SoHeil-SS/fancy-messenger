import { useImport } from "../../../Imports/imports";

function ForwardModal({ modalMode, persons, searchinputtext, onHide }) {
  const {
    dispatch,
    Button,
    Container,
    Modal,
    Row,
    PersonListItem,
    SearchIcon,
    handleFilterForwardPersons,
    onInputChange,
    onForwardChat,
  } = useImport();

  const filteredPersonsToForward = handleFilterForwardPersons(
    modalMode,
    persons,
    searchinputtext
  );

  const list = filteredPersonsToForward.map((person) => {
    const { personId, avatar, personName } = person.details;

    return (
      <PersonListItem
        key={personId}
        personId={personId}
        personItemClassName={"listItem_list-item__1mnZB listItem_bg "}
        avatar={avatar}
        personName={personName}
        onPersonClick={() => dispatch(onForwardChat(personId))}
      />
    );
  });
  return (
    <Modal
      show={modalMode === "forward" ? true : false}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <div style={{ backgroundColor: " rgb(39, 39, 39)" }}>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <span style={{ color: "wheat" }}>Choose a recipient...</span>
            <div>
              <SearchIcon />
              <input
                type="text"
                placeholder="Type to search persons..."
                value={searchinputtext}
                onChange={(e) =>
                  dispatch(onInputChange(e.target.value, "searchInputText"))
                }
                className="appStatus_search-text__3Fr_f forward-input"
              />
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="show-grid">
          <Container>
            <Row>{list}</Row>
          </Container>
        </Modal.Body>

        <Modal.Footer>
          <Button className="btn btn-danger" onClick={() => dispatch(onHide())}>
            Cancel
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}

export default ForwardModal;

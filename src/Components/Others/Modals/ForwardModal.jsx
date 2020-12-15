import { useImport } from "../../../Imports/imports";

function ForwardModal({ show, searchMode, persons, searchinputtext, onHide }) {
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
    searchMode,
    persons,
    searchinputtext
  );

  function onClickPerson(dispatch, personId) {
    dispatch(onForwardChat(personId));
  }

  const list = filteredPersonsToForward.map((person) => {
    const { personId, avatar, personName } = person.details;

    return (
      <PersonListItem
        key={personId}
        personId={personId}
        personItemClassName={"listItem_list-item__1mnZB listItem_bg "}
        avatar={avatar}
        personName={personName}
        onPersonClick={() => onClickPerson(dispatch, personId)}
      />
    );
  });

  return (
    <Modal show={show} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Choose a recipient...
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
    </Modal>
  );
}

export default ForwardModal;

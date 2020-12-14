import { useImport } from "../../../imports";

function ForwardModal(props) {
  const {
    dispatch,
    Button,
    Container,
    Modal,
    Row,
    PersonListItem,
    SearchIcon,
    onInputChange,
    onForwardChat,
  } = useImport();

  function onClickPerson(dispatch, personId) {
    dispatch(onForwardChat(personId));
  }

  const list = props.persons.map((person) => {
    const { personId, avatar, personName } = person.details;

    return (
      <PersonListItem
        key={personId}
        personId={personId}
        condition={false}
        avatar={avatar}
        personName={personName}
        onPersonClick={() => onClickPerson(dispatch, personId)}
      />
    );
  });

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Choose a recipient...
          <div>
            <SearchIcon />
            <input
              type="text"
              placeholder="Type to search persons..."
              value={props.searchinputtext}
              onChange={(e) =>
                dispatch(onInputChange(e.target.value, "searchInputText"))
              }
              style={{ width: "70%", marginLeft: "30px" }}
              className="appStatus_search-text__3Fr_f"
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
        <Button
          className="btn btn-danger"
          onClick={() => dispatch(props.onHide())}
        >
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ForwardModal;

//   <Col xs={12} md={8}>
//               .col-xs-12 .col-md-8
//             </Col>
//             <Col xs={6} md={4}>
//               .col-xs-6 .col-md-4
//             </Col>
//  <Col xs={6} md={4}>
//               .col-xs-6 .col-md-4
//             </Col>
//             <Col xs={6} md={4}>
//               .col-xs-6 .col-md-4
//             </Col>
//             <Col xs={6} md={4}>
//               .col-xs-6 .col-md-4
//             </Col>

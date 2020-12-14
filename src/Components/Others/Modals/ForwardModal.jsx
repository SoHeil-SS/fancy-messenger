import { useImport } from "../../../imports";

function ForwardModal(props) {
  const {
    Button,
    Col,
    Container,
    Modal,
    Row,
    useDispatch,
    onInputChange,
  } = useImport();
  const dispatch = useDispatch();

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Choose a recipient...
          <input
            type="text"
            placeholder="Type to search users..."
            value={props.searchInputText}
            onChange={(e) =>
              dispatch(onInputChange(e.target.value, "searchInputText"))
            }
            style={{ width: "70%", marginLeft: "30px" }}
            className="appStatus_search-text__3Fr_f"
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              .col-xs-12 .col-md-8
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => dispatch(props.onHide())}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ForwardModal;

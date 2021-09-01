import React from "react";
import { useState } from "react";

// react-bootstrap components
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
  InputGroup,
  Modal,
  Alert,
} from "react-bootstrap";

function Trainer() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Alert variant="primary">
              Changes Saved Successfully!
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Trainer Name</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                          defaultValue="First Name"
                          placeholder="First Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          defaultValue="Last Name"
                          placeholder="Last Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>Email</label>
                          <Form.Control
                            defaultValue="Email"
                            placeholder="Email"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                        <label>Select Trainer Type</label>
                          <InputGroup>
                            <InputGroup.Radio name="Group1" aria-label="1" id="physical" />
                            <label for="physical" className="radio-label">Physical</label>
                          </InputGroup>
                          <InputGroup>
                            <InputGroup.Radio name="Group1" aria-label="2" id="online" />
                            <label for="online" className="radio-label">Online</label>
                          </InputGroup>
                        </Form.Group>
                      </Col>
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>Salary</label>
                          <Form.Control
                            defaultValue="30000.00"
                            placeholder="30000.00"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                          <label>Telephone</label>
                          <Form.Control
                            defaultValue="Telephone"
                            placeholder="Telephone"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                     <Col className="pr-1" md="12">
                      <Button
                          className="btn-fill"
                          variant="danger"
                          onClick={handleShow}
                        >
                          Remove Trainer
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Remove the Trainer?</Modal.Title>
                          </Modal.Header>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Yes
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                              No
                            </Button>
                          </Modal.Footer>
                        </Modal>

                        <Button
                          className="btn-fill pull-right"
                          type="submit"
                          variant="primary"
                        >
                          Save Changes
                        </Button>
                     </Col>
                    </Row>              
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Trainer;

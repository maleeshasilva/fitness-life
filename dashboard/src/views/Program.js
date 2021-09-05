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
  Image,
  Modal,
  Alert,
} from "react-bootstrap";

function Program() {

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
                <Card.Title as="h4">Product Name</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Product Name</label>
                        <Form.Control
                          defaultValue="Enter Product Name"
                          placeholder="Product Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <p>Product Image</p>
                        <Image src={require("assets/img/img.jpg").default} rounded />
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Product Description</label>
                        <Form.Control
                          defaultValue="Enter the product description"
                          placeholder="Product Description"
                          as="textarea"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>Quantity</label>
                        <Form.Control
                          defaultValue="15"
                          placeholder="15"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>Price</label>
                        <Form.Control
                          defaultValue="1000.00"
                          placeholder="1000.00"
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
                          Delete Product
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

export default Program;

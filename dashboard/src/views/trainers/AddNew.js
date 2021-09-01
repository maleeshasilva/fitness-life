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
  Alert,
} from "react-bootstrap";

function TrainerAddNew() {

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Alert variant="primary">
              Trainer Added Successfully!
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Add New Trainer</Card.Title>
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
                            <InputGroup.Radio name="Group1" aria-label="1" id="physical" checked/>
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
                            defaultValue="0.00"
                            placeholder="0.00"
                            type="number"
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

export default TrainerAddNew;

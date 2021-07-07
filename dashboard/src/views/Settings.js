import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function User() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Store Settings</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Business Email</label>
                        <Form.Control
                          defaultValue="hello@fitnesslife.com"
                          placeholder="Business Email"
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="6">
                      <Form.Group>
                        <label>Telephone Number</label>
                        <Form.Control
                          defaultValue="0111233451"
                          placeholder="Telephone"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                    <Col className="pl-1" md="12">
                     <Form.Group>
                        <label>Store Address</label>
                        <Form.Control
                          defaultValue="440 R. A. De Mel Mawatha, Colombo 00300"
                          placeholder="Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>                  
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="primary"
                  >
                    Save Changes
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Dashboard Settings</Card.Title>
              </Card.Header>
              <Card.Body>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default User;

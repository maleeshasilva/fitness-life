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

function Login() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="login-card">
              <Card.Header>
                <Card.Title as="h4" className="text-center">Login to the Manager's Dashboard</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pl-1" md="12">
                      <Form.Group className="login-form">
                        <label>Business Email</label>
                        <Form.Control
                          defaultValue="hello@fitnesslife.com"
                          placeholder="Business Email"
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                      <Col className="pl-1" md="12">
                        <Form.Group className="login-form">
                          <label>Password</label>
                          <Form.Control
                            placeholder="Password"
                            type="password"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pl-1" md="12">
                        <Form.Group className="login-form">
                          <Button
                            className="btn-fill login-btn"
                            type="submit"
                            variant="primary"
                          >
                            Login
                          </Button>
                        </Form.Group>
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

export default Login;

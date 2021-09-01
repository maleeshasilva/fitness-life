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
  Alert,
} from "react-bootstrap";

function ProductAddNew() {

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Alert variant="primary">
              Product Added Successfully!
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
                          defaultValue="0"
                          placeholder="0"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>Price</label>
                        <Form.Control
                          defaultValue="0.00"
                          placeholder="0.00"
                          type="number"
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

export default ProductAddNew;

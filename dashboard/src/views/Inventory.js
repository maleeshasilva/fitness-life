import React from "react";
import { Link } from 'react-router-dom';

import {
  Card,
  Container,
  Row,
  Col,
  Table,
  Button,
} from "react-bootstrap";

function Inventory() {

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                    <i className="fas fa-shipping-fast"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Out of Stock Products</p>
                      <Card.Title as="h4">13</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6">
          </Col>
          <Col lg="6" sm="6">
            <Link to="/admin/product/add-new">
              <Button
                className="btn-fill pull-right"
                type="submit"
                variant="primary"
              >
                Add New Product
              </Button>
            </Link>
          </Col>
        </Row>
        
        <Row>

          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">All Products</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0"><i class="fas fa-image"></i></th>
                      <th className="border-0">Name</th>
                      <th className="border-0">ID</th>
                      <th className="border-0">Stock #</th>
                      <th className="border-0">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><img src={require("assets/img/img.jpg").default} className="product-image"/></td>
                      <td>RESISTANCE BAND 5LBS</td>
                      <td>P002</td>
                      <td>10</td>
                      <td>990</td>
                    </tr>
                    <tr>
                      <td><img src={require("assets/img/img.jpg").default} className="product-image"/></td>
                      <td>RESISTANCE BAND 5LBS</td>
                      <td>P002</td>
                      <td>10</td>
                      <td>990</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Out of Stock</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0"><i class="fas fa-image"></i></th>
                      <th className="border-0">Name</th>
                      <th className="border-0">ID</th>
                      <th className="border-0">Stock #</th>
                      <th className="border-0">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><img src={require("assets/img/img.jpg").default} className="product-image"/></td>
                      <td>RESISTANCE BAND 5LBS</td>
                      <td>P002</td>
                      <td>10</td>
                      <td>990</td>
                    </tr>
                    <tr>
                      <td><img src={require("assets/img/img.jpg").default} className="product-image"/></td>
                      <td>RESISTANCE BAND 5LBS</td>
                      <td>P002</td>
                      <td>10</td>
                      <td>990</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Inventory;

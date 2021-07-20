import React from "react";
// react-bootstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Table,
  Button,
} from "react-bootstrap";

function Shop() {
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
                      <i className="fas fa-store"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">New Orders</p>
                      <Card.Title as="h4">15</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                <i className="far fa-calendar-alt mr-1"></i>
                  Today
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="fas fa-hand-holding-usd"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Revenue</p>
                      <Card.Title as="h4">Rs 139,000</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  Last 30 days
                </div>
              </Card.Footer>
            </Card>
          </Col>
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
                      <p className="card-category">Pending Shipment</p>
                      <Card.Title as="h4">13</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                <i className="far fa-calendar-alt mr-1"></i>
                  Last 7 days
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                    <i className="fas fa-dolly-flatbed"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Pending Delivery</p>
                      <Card.Title as="h4">25</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                <i className="far fa-arrow-alt-circle-right"></i>
                  View More
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Orders - Pending Shipment</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">Ordeer ID</th>
                      <th className="border-0">Product Name</th>
                      <th className="border-0">Price</th>
                      <th className="border-0">Quantity</th>
                      <th className="border-0">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1561</td>
                      <td>Dumbell</td>
                      <td>500.00</td>
                      <td>4</td>
                      <td>2000.00</td>
                    </tr>
                    <tr>
                      <td>1562</td>
                      <td>Speed Jump Rope</td>
                      <td>690.00</td>
                      <td>1</td>
                      <td>690.00</td>
                    </tr>
                    <tr>
                      <td>1563</td>
                      <td>55cm Gym Ball</td>
                      <td>1950.00</td>
                      <td>2</td>
                      <td>3900.00</td>
                    </tr>
                    <tr>
                      <td>1564</td>
                      <td>Yoga Mat</td>
                      <td>2200.00</td>
                      <td>1</td>
                      <td>2200.00</td>
                    </tr>
                    <tr>
                      <td>1565</td>
                      <td>Digital Weight Scale</td>
                      <td>3900.00</td>
                      <td>1</td>
                      <td>3900.00</td>
                    </tr>
                    <tr>
                      <td>1566</td>
                      <td>Kettle Bell</td>
                      <td>2700.00</td>
                      <td>2</td>
                      <td>5400.00</td>
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
                <Card.Title as="h4">Orders - Pending Delivery</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">Ordeer ID</th>
                      <th className="border-0">Product Name</th>
                      <th className="border-0">Price</th>
                      <th className="border-0">Quantity</th>
                      <th className="border-0">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1561</td>
                      <td>Dumbell</td>
                      <td>500.00</td>
                      <td>4</td>
                      <td>2000.00</td>
                    </tr>
                    <tr>
                      <td>1562</td>
                      <td>Speed Jump Rope</td>
                      <td>690.00</td>
                      <td>1</td>
                      <td>690.00</td>
                    </tr>
                    <tr>
                      <td>1563</td>
                      <td>55cm Gym Ball</td>
                      <td>1950.00</td>
                      <td>2</td>
                      <td>3900.00</td>
                    </tr>
                    <tr>
                      <td>1564</td>
                      <td>Yoga Mat</td>
                      <td>2200.00</td>
                      <td>1</td>
                      <td>2200.00</td>
                    </tr>
                    <tr>
                      <td>1565</td>
                      <td>Digital Weight Scale</td>
                      <td>3900.00</td>
                      <td>1</td>
                      <td>3900.00</td>
                    </tr>
                    <tr>
                      <td>1566</td>
                      <td>Kettle Bell</td>
                      <td>2700.00</td>
                      <td>2</td>
                      <td>5400.00</td>
                    </tr>
                  </tbody>
                </Table>
                <Button>View More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Completed Orders</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">Ordeer ID</th>
                      <th className="border-0">Product Name</th>
                      <th className="border-0">Price</th>
                      <th className="border-0">Quantity</th>
                      <th className="border-0">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1561</td>
                      <td>Dumbell</td>
                      <td>500.00</td>
                      <td>4</td>
                      <td>2000.00</td>
                    </tr>
                    <tr>
                      <td>1562</td>
                      <td>Speed Jump Rope</td>
                      <td>690.00</td>
                      <td>1</td>
                      <td>690.00</td>
                    </tr>
                    <tr>
                      <td>1563</td>
                      <td>55cm Gym Ball</td>
                      <td>1950.00</td>
                      <td>2</td>
                      <td>3900.00</td>
                    </tr>
                    <tr>
                      <td>1564</td>
                      <td>Yoga Mat</td>
                      <td>2200.00</td>
                      <td>1</td>
                      <td>2200.00</td>
                    </tr>
                    <tr>
                      <td>1565</td>
                      <td>Digital Weight Scale</td>
                      <td>3900.00</td>
                      <td>1</td>
                      <td>3900.00</td>
                    </tr>
                    <tr>
                      <td>1566</td>
                      <td>Kettle Bell</td>
                      <td>2700.00</td>
                      <td>2</td>
                      <td>5400.00</td>
                    </tr>
                  </tbody>
                </Table>
                <Button>View More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Shop;

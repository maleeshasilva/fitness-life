import React from "react";
// react-bootstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Table,
} from "react-bootstrap";

function Trainers() {
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
                      <i className="fas fa-heartbeat"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Physical Trainers</p>
                      <Card.Title as="h4">11</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  Available Today
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
                      <i className="fas fa-wifi"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Online Trainers</p>
                      <Card.Title as="h4">15</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  Online
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
                      <i className="fas fa-coffee"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Free Trainers</p>
                      <Card.Title as="h4">3</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Update now
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
                      <i className="fas fa-calendar-day"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Physical Appointments</p>
                      <Card.Title as="h4">45</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Update Now
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Available Physical Trainers</Card.Title>
                <p className="card-category">
                  Physical Trainers available today
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Trainer ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Available</th>
                      <th className="border-0">Next Available Time</th>
                      <th className="border-0">No of Appointments today</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>P213</td>
                      <td>William Penney</td>
                      <td><i className="fas fa-circle text-danger"></i></td>
                      <td>09.00 AM</td>
                      <td>11</td>
                    </tr>
                    <tr>
                      <td>P223</td>
                      <td>Minerva Hooper</td>
                      <td><i className="fas fa-circle text-success"></i></td>
                      <td>Now</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <td>P332</td>
                      <td>Esther Farish</td>
                      <td><i className="fas fa-circle text-danger"></i></td>
                      <td>10.30 AM</td>
                      <td>13</td>
                    </tr>
                    <tr>
                      <td>P023</td>
                      <td>Gary Bauer</td>
                      <td><i className="fas fa-circle text-danger"></i></td>
                      <td>01.30 AM</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>P151</td>
                      <td>Darius Jackson</td>
                      <td><i className="fas fa-circle text-success"></i></td>
                      <td>Now</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>P136</td>
                      <td>Larry Barden</td>
                      <td><i className="fas fa-circle text-danger"></i></td>
                      <td>05.00 PM</td>
                      <td>15</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Online Trainers</Card.Title>
                <p className="card-category">
                  Online Trainers available right now
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Trainer ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Online</th>
                      <th className="border-0">Occupied</th>
                      <th className="border-0">No of Sessions today</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>V132</td>
                      <td>Diana S. Lockwood</td>
                      <td><i className="fas fa-circle text-success"></i></td>
                      <td>Yes</td>
                      <td>25</td>
                    </tr>
                    <tr>
                      <td>V223</td>
                      <td>Doreen Craft</td>
                      <td><i className="fas fa-circle text-success"></i></td>
                      <td>Yes</td>
                      <td>23</td>
                    </tr>
                    <tr>
                      <td>V139</td>
                      <td>Megan Dubose</td>
                      <td><i className="fas fa-circle text-success"></i></td>
                      <td>No</td>
                      <td>19</td>
                    </tr>
                    <tr>
                      <td>V198</td>
                      <td>Kevin Calfee</td>
                      <td><i className="fas fa-circle text-danger"></i></td>
                      <td>No</td>
                      <td>24</td>
                    </tr>
                    <tr>
                      <td>V251</td>
                      <td>Edward King</td>
                      <td><i className="fas fa-circle text-success"></i></td>
                      <td>Yes</td>
                      <td>19</td>
                    </tr>
                    <tr>
                      <td>V116</td>
                      <td>Michael Rhoads</td>
                      <td><i className="fas fa-circle text-danger"></i></td>
                      <td>No</td>
                      <td>21</td>
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

export default Trainers;

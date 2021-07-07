import React from "react";
import ChartistGraph from "react-chartist";
import {
  Card,
  Container,
  Row,
  Col,
  Table,
} from "react-bootstrap";

function Payments() {
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
                    <i className="fas fa-hand-holding-usd"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Gym Revenue</p>
                      <Card.Title as="h4">Rs 459,000</Card.Title>
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
                      <i className="fas fa-tags"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Store Revenue</p>
                      <Card.Title as="h4">Rs 239,000</Card.Title>
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
                    <i className="fas fa-wallet"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Payroll Amount</p>
                      <Card.Title as="h4">227,000.00</Card.Title>
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
                    <i className="fas fa-calendar-day"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Payroll Due</p>
                      <Card.Title as="h4">2021/07/31</Card.Title>
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
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Gym Revenue</Card.Title>
                <p className="card-category">Past 7 Days</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: [
                        "21",
                        "22",
                        "23",
                        "24",
                        "25",
                        "26",
                        "27",
                      ],
                      series: [
                        [5000, 10000, 7500, 15000, 20000, 18000, 8000, 25000],
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 0,
                      high: 30000,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: false,
                      },
                      lineSmooth: false,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 50,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Updated 5 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Store Revenue</Card.Title>
                <p className="card-category">Past 7 Days</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: [
                        "21",
                        "22",
                        "23",
                        "24",
                        "25",
                        "26",
                        "27",
                      ],
                      series: [
                        [11000, 8000, 5000, 8900, 12000, 10000, 25000, 16000],
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 0,
                      high: 30000,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: false,
                      },
                      lineSmooth: false,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 50,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Updated 5 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Payroll - Due on 2021/07/31</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Trainer ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Basic Amount</th>
                      <th className="border-0">Add-on</th>
                      <th className="border-0">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>P213</td>
                      <td>William Penney</td>
                      <td>39,000.00</td>
                      <td>-</td>
                      <td>39,000.00</td>
                    </tr>
                    <tr>
                      <td>P223</td>
                      <td>Minerva Hooper</td>
                      <td>39,000.00</td>
                      <td>9,000.00</td>
                      <td>48,000.00</td>
                    </tr>
                    <tr>
                      <td>P332</td>
                      <td>Esther Farish</td>
                      <td>28,000.00</td>
                      <td>-</td>
                      <td>28,000.00</td>
                    </tr>
                    <tr>
                      <td>P023</td>
                      <td>Gary Bauer</td>
                      <td>28,000.00</td>
                      <td>11,000.00</td>
                      <td>39,000.00</td>
                    </tr>
                    <tr>
                      <td>P151</td>
                      <td>Darius Jackson</td>
                      <td>39,000.00</td>
                      <td>5,000.00</td>
                      <td>44,000.00</td>
                    </tr>
                    <tr>
                      <td>P136</td>
                      <td>Larry Barden</td>
                      <td>29,000.00</td>
                      <td>-</td>
                      <td>29,000.00</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
              <Card.Footer>
                <p className="pull-right">Total Payout Due: Rs. 227,000.00</p>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Payments;

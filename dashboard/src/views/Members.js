import React from "react";
import ChartistGraph from "react-chartist";
import {
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import thousands from "../utils/thousands";

function Members() {

  const [onlineTotalMembers, setOnlineTotalMembers] = useState([]);
  const [physicalTotalMembers, setPhysicalTotalMembers] = useState([]);
  const [physicalNewMembers, setPhysicalNewMembers] = useState([]);

  const getPhysicalNewMembers = () => {
    Axios.get("http://localhost:3001/members/physical/new").then((response) => {
      setPhysicalNewMembers(response.data);
    });
  };

  const getOnlineTotalMembers = () => {
    Axios.get("http://localhost:3001/members/online/total").then((response) => {
      setOnlineTotalMembers(response.data);
    });
  };

  const getPhysicalTotalMembers = () => {
    Axios.get("http://localhost:3001/members/physical/total").then((response) => {
      setPhysicalTotalMembers(response.data);
    });
  };

  useEffect(() => {
    getPhysicalNewMembers();
    getOnlineTotalMembers();
    getPhysicalTotalMembers();
  }, []);


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
                    <i className="fas fa-user-plus"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">New Gym Members</p>
                      
                      {physicalNewMembers.map((val, key) => {
                        return (
                          <Card.Title as="h4">{val.count}</Card.Title>
                        );
                        })}

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
                    <i className="fas fa-users"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Gym Members</p>
                      
                      {physicalTotalMembers.map((val, key) => {
                        return (
                          <Card.Title as="h4">{val.count}</Card.Title>
                        );
                        })}

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
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="fas fa-calendar-check"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Attendance Today</p>
                      <Card.Title as="h4">53</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
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
                      <i className="fas fa-user-astronaut"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Online Members</p>
                      
                      {onlineTotalMembers.map((val, key) => {
                        return (
                          <Card.Title as="h4">{val.count}</Card.Title>
                        );
                        })}

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
        </Row>
        <Row>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">New Gym Members</Card.Title>
                <p className="card-category">Last 14 Days</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartNewGym">
                  <ChartistGraph
                    data={{
                      labels: [
                        "14",
                        "15",
                        "16",
                        "17",
                        "18",
                        "19",
                        "20",
                        "21",
                        "22",
                        "23",
                        "24",
                        "25",
                        "26",
                        "27",
                      ],
                      series: [
                        [
                          2,
                          4,
                          3,
                          5,
                          6,
                          9,
                          4,
                          1,
                          2,
                          2,
                          4,
                          3,
                          2,
                          5,
                        ],
                      ],
                    }}
                    type="Bar"
                    options={{
                      seriesBarDistance: 10,
                      axisX: {
                        showGrid: false,
                      },
                      height: "245px",
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          seriesBarDistance: 5,
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
                  More info
                  <i class="far fa-arrow-alt-circle-right"></i>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">New Online Members</Card.Title>
                <p className="card-category">Last 14 Days</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartNewOnline">
                  <ChartistGraph
                    data={{
                      labels: [
                        "14",
                        "15",
                        "16",
                        "17",
                        "18",
                        "19",
                        "20",
                        "21",
                        "22",
                        "23",
                        "24",
                        "25",
                        "26",
                        "27",
                      ],
                      series: [
                        [
                          22,
                          35,
                          56,
                          24,
                          32,
                          20,
                          25,
                          44,
                          46,
                          50,
                          43,
                          32,
                          36,
                          25,
                        ],
                      ],
                    }}
                    type="Bar"
                    options={{
                      seriesBarDistance: 10,
                      axisX: {
                        showGrid: false,
                      },
                      height: "245px",
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          seriesBarDistance: 5,
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
                  More info
                  <i class="far fa-arrow-alt-circle-right"></i>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Average Gym Attendance</Card.Title>
                <p className="card-category">By time</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartAttendance">
                  <ChartistGraph
                    data={{
                      labels: [
                        "6.00",
                        "7.00",
                        "8.00",
                        "9.00",
                        "10.00",
                        "11.00",
                        "12.00",
                        "13.00",
                        "14.00",
                        "15.00",
                        "16.00",
                        "17.00",
                        "18.00",
                        "19.00",
                        "20.00",
                        "21.00",
                      ],
                      series: [
                        [
                          10,
                          15,
                          18,
                          22,
                          16,
                          11,
                          15,
                          20,
                          17,
                          20,
                          18,
                          22,
                          25,
                          30,
                          32,
                          21,
                        ],
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 0,
                      high: 40,
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
                          seriesBarDistance: 5,
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
            </Card>
          </Col> 
        </Row>
        <Row>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Average Gym Attendance</Card.Title>
                <p className="card-category">By the day</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartAttendance">
                  <ChartistGraph
                    data={{
                      labels: [
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thur",
                        "Fri",
                        "Sat",
                      ],
                      series: [
                        [
                          130,
                          145,
                          120,
                          204,
                          190,
                          260,
                        ],
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 0,
                      high: 300,
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
                          seriesBarDistance: 5,
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
            </Card>
          </Col> 
        </Row>
      </Container>
    </>
  );
}

export default Members;

import React from "react";
import { Link } from "react-router-dom";

// react-bootstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Table,
  Button,
} from "react-bootstrap";

import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import timeCal from "../../utils/time";

function Trainers() {

  const [pTrainerList, setPTrainerList] = useState([]);
  const [oTrainerList, setOTrainerList] = useState([]);
  const [onlineAttendance, setOnlineAttendance] = useState([]);
  const [physicalAttendance, setPhysicalAttendance] = useState([]);

const getPTrainers = () => {
  Axios.get("http://localhost:3001/trainers/physical").then((response) => {
    setPTrainerList(response.data);
    console.log(response.data);
  });
};

const getOTrainers = () => {
  Axios.get("http://localhost:3001/trainers/online").then((response) => {
    setOTrainerList(response.data);
    console.log(response.data);
  });
};

const getOnlineAttendance = () => {
  Axios.get("http://localhost:3001/trainers/attendance-online").then((response) => {
    setOnlineAttendance(response.data);
    console.log(response.data);
  });
};

const getPhysicalAttendance = () => {
  Axios.get("http://localhost:3001/trainers/attendance-physical").then((response) => {
    setPhysicalAttendance(response.data);
    console.log(response.data);
  });
};

useEffect(() => {
  getPTrainers();
  getOTrainers();
  getOnlineAttendance();
  getPhysicalAttendance();
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
                      <i className="fas fa-heartbeat"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Physical Trainers</p>
                      
                        {physicalAttendance.map((val, key) => {
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

                      {onlineAttendance.map((val, key) => {
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
                    {pTrainerList.map((val, key) => {

                      let availDate = val.date.split('T')[0];
                      let nextAvailTime = timeCal(val.time);

                      return (
                        <tr>
                          <td>{val.trainerId}</td>
                          <td>{val.firstName} {val.lastName}</td>
                          <td><i className="fas fa-circle text-danger"></i></td>
                          <td>{availDate} - {nextAvailTime}</td>
                          <td>{val.count}</td>
                        </tr>
                      );
                    })}
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
                    {oTrainerList.map((val, key) => {

                    let availDate = val.date.split('T')[0];
                    let nextAvailTime = timeCal(val.time);

                    return (
                      <tr>
                        <td>{val.trainerId}</td>
                        <td>{val.firstName} {val.lastName}</td>
                        <td><i className="fas fa-circle text-danger"></i></td>
                        <td>{availDate} - {nextAvailTime}</td>
                        <td>{val.count}</td>
                      </tr>
                    );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="px-1" md="12">
            <Link to="/admin/alltrainers">  
              <Button
                className="btn-outline"
                type="submit"
                variant="primary"
              >
                All Trainers
              </Button>
            </Link>
            <Link to="/admin/trainer/add-new"> 
              <Button
                className="btn-fill pull-right"
                type="submit"
                variant="primary"
              >
                Add New Trainer
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Trainers;

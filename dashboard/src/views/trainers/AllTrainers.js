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

function AllTrainers() {

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">All Trainers</Card.Title>
                <p className="card-category">
                  Physical and Online Trainers
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Trainer ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Type</th>
                      <th className="border-0">Salary</th>
                      <th className="border-0">Telephone</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="px-1" md="12">
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

export default AllTrainers;

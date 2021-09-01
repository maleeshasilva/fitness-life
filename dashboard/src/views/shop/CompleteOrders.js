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

import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";

function CompleteOrders() {

  const [cOrderList, setCOrderList] = useState([]);

  const getCOrders = () => {
    Axios.get("http://localhost:3001/orders/complete").then((response) => {
      setCOrderList(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    getCOrders();
  }, []);

  return (
    <>
      <Container fluid>
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
                    {cOrderList.map((val, key) => {
                      return (
                        <tr>
                          <td>{val.orderID}</td>
                          <td>{val.productName}</td>
                          <td>{val.price}</td>
                          <td>{val.quantity}</td>
                          <td>{val.price * val.quantity}</td>
                        </tr>
                      );
                    })}
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

export default CompleteOrders;

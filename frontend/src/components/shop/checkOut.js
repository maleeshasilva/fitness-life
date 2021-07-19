import React from 'react'
import './checkOut.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, InputGroup, Row, Form, Button, Table } from 'react-bootstrap';

import {Link} from 'react-router-dom';

export default function CheckOut(){
    return(

<div className= "check-out">



<Card style={{ width: '50rem' }}>
  <Card.Body>
  <h1>Order Details</h1>
  <Table responsive="sm">
    
    <thead>
      <tr>
   
        <th>ITEM</th>
        <th>QUANTITY</th>
        <th>PRICE</th>
        <th>ADD</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        
        <td>Molt Supplement</td>
        <td>x1</td>
        <td>1350 LKR</td>
        <td><InputGroup>
    <InputGroup.Radio aria-label="Radio button for following text input" />
   
  </InputGroup></td>
        
      </tr>
      <tr>
        
        <td>Ladies Gym Pant</td>
        <td>x1</td>
        <td>1450LKR</td>
        <td><InputGroup>
    <InputGroup.Radio aria-label="Radio button for following text input" />
   
  </InputGroup></td>
        
      </tr>
      <tr>
      
        <td>Dumble Set</td>
        <td>x2</td>
        <td>3750 LKR</td>
        <td><InputGroup>
    <InputGroup.Radio aria-label="Radio button for following text input" />
   
  </InputGroup></td>
       
      </tr>
    </tbody>
  </Table>


  <Form>
    <h2>Billing Details</h2>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="text" placeholder="Full Name" />
  </Form.Group>
  <Form.Label>Shipping Address</Form.Label>
    <Form.Control type="text" placeholder="Shipping Address" />
  <Button variant="primary" type="submit">
   Place Order
  </Button>
</Form>
  </Card.Body>
</Card>





</div>
);

}
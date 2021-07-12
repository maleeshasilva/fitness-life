import React from 'react'
import './eshopNavbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row } from 'react-bootstrap';

import {Link} from 'react-router-dom';

export default function Tabnavb(){
    return(

<div className= "nav-btn-icon">

  <Row>
  <Button>
    <Link to="/sup">Supplements </Link>
      </Button>{' '}
    <Button>
    <Link to="/wear">Gym Wear </Link>
    
    </Button>{' '}
    <Button>
    <Link to="/equip">Equipments </Link>
    </Button>{' '}
  </Row>
  </div>

    );










  

  
    
  

}
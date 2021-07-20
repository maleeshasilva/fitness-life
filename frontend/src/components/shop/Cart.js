import React, { useState } from "react";
import '../../App.css';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './Items';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,  Navbar, Nav, } from "react-bootstrap";

import { products } from "./products";


const  Cart = () => {

    const [item, setItem] = useState(products);

  return(

    <>
        <div className="cart-nav">
            <Navbar>
                <Navbar.Brand href="./mainContent" className="continue-shopping">
                        <img src="./images/icons/arrow2.png" alt="arrow" className="arrow-icon"/>
                        <h3>Continue Shopping</h3>
                </Navbar.Brand>
                <Nav className="cart-icon">
                    <Nav.Link href="#">
                        <img src="./images/icons/cart.png" alt="cart"/>
                        <p>5</p>
                    </Nav.Link>
                </Nav>
            </Navbar>

        </div>
            

            <section className="main-cart-section">
                <h1>shopping Cart</h1>
                <p className="cp-total-items">You have <span className="cp-total-items-count"> 7 </span> items in shopping cart</p>
                <div className="cp-cart-items">
                    <div className="cp-cart-items-container">
                        <Scrollbars>
                        {
                            item.map((curItem) =>{
                            return  <Items key={ curItem.id} {...curItem}/>
                            })
                        }
                        </Scrollbars>

                    </div>
                </div>

                <div className="cp-card-total">
                    <h3>Cart Total : <span>Rs 22300 </span></h3>
                    <button>Checkout</button>
                </div>
      
            </section>
      
    </>
  );
};

export default Cart;
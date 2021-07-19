import React, { useState } from "react";
import '../../App.css'
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './WishListItems';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Navbar, Nav, } from "react-bootstrap";
import { products } from "./products";


const  WishList = () => {

    const [item, setItems] = useState(products);

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
                <h1>WishList</h1>
                <div className="wl-cart-items">
                    <div className="wl-cart-items-container">
                        <Scrollbars>
                        {
                            item.map((curItem) =>{
                            return  <Items key={ curItem.id} {...curItem}/>
                            })
                        }
                        </Scrollbars>

                    </div>
                </div>
      
            </section>
      
    </>
  );
};

export default WishList
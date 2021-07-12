import React from 'react'
import product_card from '../shop_data/gym_wear'
import './eshop.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Card  , Button} from "react-bootstrap";



const WearContent = () => {
    console.log(product_card);
    const listItems = product_card.map((item) =>
    <>
        <Card className="item-card" key = {item.id}>
            <Card.Img variant="top" src={item.thumb} />
            <Card.Body>
            <Card.Title>{item.product_name}</Card.Title>
                <Card.Text>
                    <p className="item-info">{item.description}</p>
                </Card.Text>
                <p className= "price">{item.price}<span>{item.currency}</span></p>
                <div className="view-btn">View Item</div>
            </Card.Body>
                
        </Card>
    </>
    );
    return(
        <div className="main_content">
   
            {listItems}
        </div>
    )

}

export default WearContent;
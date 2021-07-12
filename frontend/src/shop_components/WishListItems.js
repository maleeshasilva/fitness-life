import React from'react'

const WishListItems = ({ id, description, title, img, price, quantity }) => {
  return (
    <>

          <div className="items-info">
            <div className="remove-item">
                <i class="fas fa-times"></i>
            </div>
            <div className="product-img">
              <img src={img} alt="img" />
            </div>
            <div className="title">
              <h2>{ title}</h2>
              <p>{ description}</p>
            </div>
            <div className="price">
                <h3>{ price}</h3>
            </div>
            <div className="add-cart">
                <i class="fas fa-shopping-cart"></i>
            </div>
          </div>


        <hr/>
    </>
  )
}

export default WishListItems
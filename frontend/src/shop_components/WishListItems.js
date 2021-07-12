import React from'react'

const WishListItems = ({ id, description, title, img, price, quantity }) => {
  return (
    <>

          <div className="wl-items-info">
            <div className="wl-remove-item">
                <i class="fas fa-times"></i>
            </div>
            <div className="wl-img">
              <img src={img} alt="img" />
            </div>
            <div className="wl-title">
              <h2>{ title}</h2>
              <p>{ description}</p>
            </div>
            <div className="wl-price">
                <h3>{ price}</h3>
            </div>
            <div className="wl-add-cart">
                <i class="fas fa-shopping-cart"></i>
            </div>
          </div>


        <hr/>
    </>
  )
}

export default WishListItems
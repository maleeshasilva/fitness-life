import React from'react'

const Items = ({ id, description, title, img, price, quantity }) => {
  return (
    <>
          <div className="cp-items-info">
            <div className="cp-img">
              <img src={img} alt="img" />
            </div>
            <div className="cp-title">
              <h2>{ title}</h2>
              <p>{ description}</p>
            </div>
            <div className="add-minus-quantity">
                <i className="fas fa-minus minus"></i>
                <input type="text" placeholder="1"/>
                <i className="fas fa-plus add"></i>
            </div>
            <div className="cp-price">
                <h3>{ price}</h3>
            </div>
            <div className="cp-remove-item">
                <i className="fas fa-trash remove"></i>
            </div>
          </div>

        <hr/>
    </>
  )
}

export default Items
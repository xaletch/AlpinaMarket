import React from 'react'

export const CartItem = ({ img, title, price }) => {
  return (
    <div>
        <div>
            <img src={img} alt="" />
            <div>
                <h3>{title}</h3>
                <span>{price}</span>
            </div>
        </div>
    </div>
  )
}

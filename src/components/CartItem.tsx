import React from 'react'

export const CartItem = ({ img, title, price }) => {
  return (
    <div className='cart__card flex'>
        <div className='cart__card--left'>
            <img className='cart__card--left__img' src={img} alt="" />
        </div>
        <div className='cart__card--right flex'>
          <div className='cart__card--right--inner flex'>
            <div className='cart__card--right__counter--title flex'>
              <div className='cart__card--right__title'>
                <a className='cart__product--name'>{title}</a>
              </div>
              <div className='cart__card--right__counter flex'>
                <div className='cart__card--right__counter--button cart__card--plus flex'>-</div>
                <div className='cart__card--right__counter--button cart__card--count flex'>2</div>
                <div className='cart__card--right__counter--button cart__card--minus flex'>+</div>
              </div>
            </div>
            <div></div>
              <div className='cart__card--right__price--delete flex'>
              <div className='cart__card--right__price flex'>
                <p>{price} руб.</p>
              </div>
            <div className='cart__card--right__delete'>
              <div className='cart__card--right__button--delete flex'>
                <svg fill="#000000" height="800px" width="800px" version="1.1" 
	                viewBox="0 0 490 490">
                  <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
	                489.292,457.678 277.331,245.004 489.292,32.337 "/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

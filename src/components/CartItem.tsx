import React from 'react'

import { useDispatch } from 'react-redux'
import { deleteProduct, minusProduct, plusProduct } from '../redux/slice/cartSlice';
import { Link } from 'react-router-dom';

export const CartItem = ({ id, img, title, price, count }) => {
  const dispatch = useDispatch();
  
  const delProduct = () => {
    dispatch(deleteProduct(id));
    localStorage.removeItem(`cardItemAdd_${id}`);
  };

  const minusBtn = () => {
    dispatch(minusProduct(id));
  };

  const plusBtn = () => {
    dispatch(plusProduct(id));
  };

  return (
    <div className='cart__card flex'>
      <Link to={`/product/${id}`}>
        <div className='cart__card--left'>
          <img className='cart__card--left__img' src={img} alt={title} />
        </div>
      </Link>
        <div className='cart__card--right flex'>
          <div className='cart__card--right--inner flex'>
            <div className='cart__card--right__counter--title flex'>
              <div className='cart__card--right__title'>
                <Link to={`/product/${id}`} className='cart__product--name'>{title}</Link>
              </div>
              <div className='cart__card--right__counter flex'>
                <button disabled={count === 1} className='cart__card--right__counter--button cart__card--plus flex' onClick={minusBtn}>-</button>
                <div className='cart__card--right__counter--button cart__card--count flex'>{count}</div>
                <button className='cart__card--right__counter--button cart__card--minus flex' onClick={plusBtn}>+</button>
              </div>
            </div>
            <div></div>
              <div className='cart__card--right__price--delete flex'>
              <div className='cart__card--right__price flex'>
                <p>{price} руб.</p>
              </div>
            <div className='cart__card--right__delete'>
              <div className='cart__card--right__button--delete flex' onClick={delProduct}>
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

import React from 'react'

import { CartItem } from '../components/CartItem'
import { CartPay } from '../components/CartPay';

import { useSelector } from 'react-redux';
import { selectCart } from '../redux/slice/cartSlice';
import { CartEmpty } from '../components/CartEmpty';

export const Cart = () => {
  const { items, totalPrice } = useSelector(selectCart);

  if (totalPrice === 0) {
    return <CartEmpty />
  }

  return (
    <div className='cart'>
        <div className='container'>
            <h2 className='cart__title'>Корзина</h2>
            <div className='cart__container flex'>
              <div className='cart__block--card'>
                {items.map((item) => <CartItem key={item.id} {...item} />)}
              </div>
              <div className='cart__block--pay'>
                <CartPay totalPrice={totalPrice} />
              </div>
            </div>
        </div>
    </div>
  )
}

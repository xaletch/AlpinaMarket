import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { discountTotalPrice } from '../../../redux/slice/cartSlice';
import { RootState } from '../../../redux/store';
import { Link } from 'react-router-dom';

export const CartPay = ({ totalPrice }) => {
  const dispatch = useDispatch();
  const [couponCode, setCouponCode] = useState('');

  const discountPrice = useSelector((state: RootState) => state.cart.discountPrice);

  const handleCouponChange = (e: any) => {
    setCouponCode(e.target.value);
  }

  const applyCoupon = () => {
    dispatch(discountTotalPrice({ discount: couponCode }));

    setCouponCode('');
  };

  return (
    <>
      <div className='cart__header--pay'>
        <p className='cart__header--pay__title'>Ваш заказ</p>
      </div>
      <div className='cart__content--pay'>
        <div className='cart__pay--sum flex'>
          <p className='cart__pay--sum__title'>Сумму заказа</p>
          <p className='cart__pay--sum__sum'>{totalPrice} руб.</p>
        </div>
        <div className='cart__pay--sum flex'>
          <p className='cart__pay--sum__title'>Скидка</p>
          <p className='cart__pay--sum__sum'>{discountPrice} руб.</p>
        </div>
      </div>
      <div className='cart__line'></div>
      <div className='cart__payment'>
        <div className='cart__payment--input'>
          <input type="text" className='cart__payment--input__coupon' value={couponCode} onChange={handleCouponChange} placeholder='Номер купона (KU6ym)' />
          <button className='cart__payment--input__button' onClick={applyCoupon} >Применить</button>
        </div>
        <div className='cart__payment--total flex'>
          <p className='cart__payment--total__title'>Итого:</p>
          <p className='cart__payment--total__price'>{totalPrice - discountPrice} руб.</p>
        </div>
        <Link to='order'>
          <button className='cart__payment--go-to-pay'>Перейти к оформлению</button>
        </Link>
      </div>
    </>
  )
}

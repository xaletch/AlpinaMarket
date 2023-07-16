import React from 'react'

export const CartPay = () => {
  return (
    <>
      <div className='cart__header--pay'>
        <p className='cart__header--pay__title'>Ваш заказ</p>
      </div>
      <div className='cart__content--pay'>
        <div className='cart__pay--sum flex'>
          <p className='cart__pay--sum__title'>Сумму заказа</p>
          <p className='cart__pay--sum__sum'>90000 руб.</p>
        </div>
      </div>
      <div className='cart__line'></div>
      <div className='cart__payment'>
        <div className='cart__payment--input'>
          <input type="text" className='cart__payment--input__coupon' placeholder='Номер купона' />
          <button className='cart__payment--input__button'>Применить</button>
        </div>
        <div className='cart__payment--total flex'>
          <p className='cart__payment--total__title'>Итого:</p>
          <p className='cart__payment--total__price'>10000 руб.</p>
        </div>
        <button className='cart__payment--go-to-pay'>Перейти к оформлению</button>
      </div>
    </>
  )
}

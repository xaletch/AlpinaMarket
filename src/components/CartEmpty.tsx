import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonComeBack } from './ButtonComeBack'

export const CartEmpty = () => {
  return (
    <div className='container'>
      <ButtonComeBack />
      <h2 className='cart__title'>Корзина</h2>
      <div className='cart--empty'>
        <div className='cart--empty__content'>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="50" viewBox="0 0 48 50" fill="none">
            <path d="M43.8398 46.9951L40.9189 14.4672C40.8392 13.5789 40.0947 12.8985 39.203 12.8985H33.1796V10.1819C33.1796 5.11901 29.0608 1 23.9982 1C18.9357 1 14.8174 5.11901 14.8174 10.1819V12.8985H8.78993C7.89818 12.8985 7.15367 13.5789 7.07396 14.4672L4.14165 47.123C4.09847 47.6049 4.25973 48.0825 4.58615 48.4395C4.91258 48.7965 5.37407 48.9998 5.85762 48.9998H42.1355H42.1401C43.0918 48.9998 43.863 48.2284 43.863 47.2769C43.8627 47.1811 43.8549 47.0867 43.8398 46.9951ZM18.2631 10.1819C18.2631 7.01898 20.8359 4.44572 23.9984 4.44572C27.1611 4.44572 29.7341 7.01898 29.7341 10.1819V12.8985H18.2631V10.1819ZM7.7422 45.5543L10.3651 16.3442H14.8174V19.4252C14.8174 20.3766 15.5886 21.148 16.5403 21.148C17.492 21.148 18.2631 20.3766 18.2631 19.4252V16.3442H29.7341V19.4252C29.7341 20.3766 30.5053 21.148 31.457 21.148C32.4087 21.148 33.1799 20.3766 33.1799 19.4252V16.3442H37.6281L40.2509 45.5543H7.7422Z" fill="black" stroke="white" stroke-width="2"/>
          </svg>
          <p className='cart--empty__content--text'>Нет товаров в корзине. перейдите в каталог, чтобы добавить товар</p>
          <Link to='/'>
            <button className='cart--empty__content--button'>В каталог</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

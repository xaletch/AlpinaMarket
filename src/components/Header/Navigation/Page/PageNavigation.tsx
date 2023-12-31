import React from 'react'
import { Link } from 'react-router-dom';

export const PageNavigation = () => {
  const navigationPage = [
    {"title": 'О нас', "navigation": "about"}, 
    {"title":'Наши салоны', "navigation": "salons"}, 
    {"title": 'Оплата и доставка', "navigation": "paymentDelivery"},
  ];

  return (
    <ul className='header__top--list flex'>
      {navigationPage.map((navigationName, index) =>
        <Link to={navigationName.navigation} key={index}>
          <li className='header__top--item'>{navigationName.title}</li>
        </Link>
      )}
    </ul>
  )
}
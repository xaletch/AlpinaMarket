import React from 'react'
import { Link } from 'react-router-dom';

export const PageNavigation = () => {
  const navigationPage = [
    {"title": 'О нас', "navigation": "About"}, 
    {"title":'Наши салоны', "navigation": "Salons"}, 
    {"title": 'Оплата и доставка', "navigation": "Payment&Delivery"}, 
    {"title": 'Для бизнеса', "navigation": "Business"}
  ];

  return (
    <ul className='header__top--list flex'>
      {navigationPage.map((navigationName, i) =>
        <Link to={navigationName.navigation}>
          <li key={i} className='header__top--item'>{navigationName.title}</li>
        </Link>
      )}
    </ul>
  )
}
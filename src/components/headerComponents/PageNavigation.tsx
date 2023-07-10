import React from 'react'
import { Link } from 'react-router-dom';

export const PageNavigation = () => {
  const navigationPage = [
    {"title": 'О нас', "navigation": "about"}, 
    {"title":'Наши салоны', "navigation": "salons"}, 
    {"title": 'Оплата и доставка', "navigation": "payment&delivery"}, 
    {"title": 'Для бизнеса', "navigation": "business"}
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
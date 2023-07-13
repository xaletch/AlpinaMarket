import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface PageNames {
  [key: string]: string;
}

export const ButtonComeBack = () => {
  const location = useLocation();

  const pageNames: PageNames = {
    '/': 'Главная',
    '/about': 'О нас',
    '/salons': 'Наши салоны',
    '/paymentDelivery': 'Оплата и доставка',
    '/business': 'Для бизнеса',
  };

  const getPageName = (pathname: string) => {
    return pageNames[pathname] || '';
  };

  return (
    <>
      <ul className='will-return__list flex'>
        <li className='will-return__item will-return--back'>
          <Link to='/'>Главная</Link>
        </li>
        /
        <li className='will-return__item will-return--page-open'>
          <span>{getPageName(location.pathname)}</span>
        </li>
      </ul>
    </>
  );
};
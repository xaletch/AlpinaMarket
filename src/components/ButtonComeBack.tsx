import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import productNavigate from './headerComponents/productNavigate';

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
    '/card': 'Корзина',
    '/catalog': 'Каталог',
    '/rooms': 'Комнаты',
    '/design-projects': 'Дизайн-проекты',
    '/custom-made_furniture': 'Мебель на заказ',
    '/stock': 'Акции',
    '/furniture': 'Мебель',
    '/list_rooms': 'Список комнат',
    '/goods_home': 'Товары для дома',
    '/fittings_accessories': 'Фурнитура и комплектующие',
    '/tiles_porcelain': 'Плитка, керамогранит и мозаика',
    '/furniture_order': 'Мебель на заказ',
    '/search_all': 'все результаты поиска'
    // '/tables-chairs/tables-tables': 'Столы и стулья / Столы и столики',
  };

  const getPageName = (pathname: string) => {
    return pageNames[pathname] || '';
  };

  const selectedCategory = productNavigate.find((category) => category.navigation === 'tables-chairs');

  const category = selectedCategory?.nameFurniture.map((item) => item.navigateName);

    // console.log(category[]);

  // console.log(`Главная / ${selectedCategory?.title} / ${selectedCategory?.nameFurniture[0].navigateName}`);

  // const selectedCategory = productNavigate.find(category => category === "tables-tables");

  // const navigationPath = `Главная / ${selectedCategory?.title} / ${selectedCategory?.nameFurniture[0].navigateName}`;

  // console.log(navigationPath);

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
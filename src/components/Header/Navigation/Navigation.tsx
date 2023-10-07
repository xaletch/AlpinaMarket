import React from 'react'
import { Link } from 'react-router-dom';

export const Navigation = () => {
    const navigation = [
      {
        name: 'КАТАЛОГ',
        navigate: 'catalog',
      },
      {
        name: 'КОМНАТЫ',
        navigate: 'rooms',
      },
      {
        name: 'ДИЗАЙН-ПРОЕТЫ',
        navigate: 'design-projects',
      },
      {
        name: 'МЕБЕЛЬ НА ЗАКАЗ',
        navigate: 'custom-made_furniture',
      }
    ];
  return (
    <ul className='header__bottom--list flex'>
        {navigation.map((navigationName, i) =>
        <li key={i} className='header__bottom--item'><Link to={navigationName.navigate}>{navigationName.name}</Link></li>
        )}
    </ul>
  )
}

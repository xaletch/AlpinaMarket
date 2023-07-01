import React from 'react'

export const Navigation = () => {
    const navigation = ['КАТАЛОГ', 'КОМНАТЫ', 'ДИЗАЙН-ПРОЕТЫ', 'МЕБЕЛЬ НА ЗАКАЗ'];
  return (
    <ul className='header__bottom--list flex'>
        {navigation.map((navigationName, i) =>
        <li key={i} className='header__bottom--item'>{navigationName}</li>
        )}
    </ul>
  )
}

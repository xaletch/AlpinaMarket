import React from 'react'

export const PageNavigation = () => {
  const navigationPage = ['О нас', 'Наши салоны', 'Оплата и доставка', 'Для бизнеса'];

  return (
    <ul className='header__top--list flex'>
      {navigationPage.map((navigationName, i) =>
        <li key={i} className='header__top--item'>{navigationName}</li>
      )}
    </ul>
  )
}
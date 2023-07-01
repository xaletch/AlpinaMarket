import React from 'react'

export const ProductNavigation = () => {
  const navigationProduct = ['Мебель', 'Мебельная фурнитура и комплектующие', 'Товары для дома', 'Плитка, керамогранит и мозаика', 'Акции'];

  return (
    <ul className='header__navigation--list flex'>
      {navigationProduct.map((navigationName, i) =>
        <li key={i} className='header__navigation--item'>{navigationName}</li>
      )}
    </ul>
  )
}

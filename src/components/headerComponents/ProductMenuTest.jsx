import React from 'react'

import productNavigate, {productNavigateCard} from './productNavigate/index'

interface MenuProps {
  isProductMenuOpen: boolean;
}

export const ProductMenuTest: React.FS<MenuProps> = ({ isProductMenuOpen }) => {
  return (
    <div className={isProductMenuOpen ? 'header__navigation--product' : 'header__navigation--productOff'}>
    <div className='header__navigation--inner flex'>
      <ul className='navigation__product-list flex'>
        {productNavigate.map((product) => (
          <div className='navigation--product__block'>
            <p className='navigation__product--title'>{product.title}</p>  
            <ul className='navigation__product--list'>
              {product.nameFurniture.map((name) => (
                <li className='navigation__product--item' key={name}>{name}</li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
      <div className='header__navigation--card'>
        <div className='navigation__card--block'>
          {productNavigateCard.map((obj, item) => (
            <div className='navigation__card' key={item}>
              <img className='navigation__card--img' src={obj.imageUrl} alt="error" />
              <span className='navigation__card--title'>{obj.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}


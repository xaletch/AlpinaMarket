import React, { SetStateAction, Dispatch } from 'react';

interface MenuPropsTest {
  isProductMenuOpen: boolean;
  setIsProductMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const ProductNavigation: React.FC<MenuPropsTest> = ({isProductMenuOpen, setIsProductMenuOpen}) => {
  const navigationProduct = ['Мебель', 'Мебельная фурнитура и комплектующие', 'Товары для дома', 'Плитка, керамогранит и мозаика', 'Акции'];

  const handleClickProduct = () => {
    setIsProductMenuOpen(!isProductMenuOpen)
  }

  return (
    <>
      <ul className='header__navigation--list flex'>
        {navigationProduct.map((navigationName, i) =>
          <li key={i} className='header__navigation--item' onMouseOver={handleClickProduct}>{navigationName}</li>
        )}
      </ul>
    </>
  )
}

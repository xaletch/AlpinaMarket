import React, { SetStateAction, Dispatch } from 'react';

interface MenuPropsTest {
  setSelectedCategoryId: Dispatch<SetStateAction<number | null>>;
  selectedCategoryId: number | null;
}

export const ProductNavigation: React.FC<MenuPropsTest> = ({ setSelectedCategoryId, selectedCategoryId }) => {
  const navigationProduct = [
    {"title": 'Мебель', "id": 1, "className": "header__navigation--item"},
    {"title": 'Мебельная фурнитура и комплектующие', "id": 2, "className": "header__navigation--item"},
    {"title": 'Товары для дома', "id": 3, "className": "header__navigation--item"},
    {"title": 'Плитка, керамогранит и мозаика', "id": 4, "className": "header__navigation--item"},
    {"title": 'Акции', "id": 5, "className": "stock header__navigation--item"}
  ];

  const handleClickProduct = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <>
      <ul className='header__navigation--list flex'>
        {navigationProduct.map((category, i) =>
          <li key={i} className={selectedCategoryId === category.id ? 'header__navigation--active' : 'header__navigation--item'} onMouseEnter={() => handleClickProduct(category.id)}>{category.title}</li>
        )}
      </ul>
    </>
  )
}

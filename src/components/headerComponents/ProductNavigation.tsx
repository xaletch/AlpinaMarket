import React, { SetStateAction, Dispatch } from 'react';

interface MenuPropsTest {
  setSelectedCategoryId: Dispatch<SetStateAction<number | null>>;
}

export const ProductNavigation: React.FC<MenuPropsTest> = ({ setSelectedCategoryId }) => {
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

  // const handleMouseLeave = () => {
  //   setSelectedCategoryId(null);
  // };

  return (
    <>
      <ul className='header__navigation--list flex'>
        {navigationProduct.map((category, i) =>
          <li key={i} className={category.className} onMouseEnter={() => handleClickProduct(category.id)}>{category.title}</li>
        )}
      </ul>
    </>
  )
}

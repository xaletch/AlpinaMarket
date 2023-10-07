import React from 'react'
import { productNavigate } from '../../../../array/productNavigate/index';

export const MobileMenuCategoryCatalog = ({ selectedCategories }) => {
  return (
    <div className='header_menu-category-menu'>
        <ul className='header_menu-category-menu_list'>
            {productNavigate.map((item, index) => (
                item.id === selectedCategories && (
                    <li className='header_menu-category-menu_item header_menu-category-menu_category' key={index}>{item.title}</li>
                )
            ))}
        </ul>
    </div>
  )
}

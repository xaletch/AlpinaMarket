import React from 'react'
import { MenuProductBlock } from './MenuProductBlock';

export const MenuProduct = ({ items, totalPrice, discountPrice, openMenuProduct, setOpenMenuProduct }) => {

    const handleCloseMenu = () => {
        setOpenMenuProduct(false);
    };

    return (
        <>
            <div className='order_menu-products-close'>
                <svg onClick={handleCloseMenu} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10.7631 12.1771L10.8691 12.071L10.7631 11.9649L5.21213 6.414L6.414 5.21213L11.9649 10.7631L12.071 10.8691L12.1771 10.7631L17.728 5.21213L18.9299 6.414L13.3789 11.9649L13.2729 12.071L13.3789 12.1771L18.9299 17.728L17.728 18.9299L12.1771 13.3789L12.071 13.2729L11.9649 13.3789L6.414 18.9299L5.21213 17.728L10.7631 12.1771Z" fill="black" stroke="white" stroke-width="0.3"/>
                </svg>
            </div>
            <h2>Состав заказа</h2>
            <div className='order_menu-products_product'>
                {items.map((item: any, index: any) => <MenuProductBlock key={index} {...item} totalPrice={totalPrice} discountPrice={discountPrice} openMenuProduct={openMenuProduct} />)}
            </div>
        </>
    )
}

import React from 'react';

import { Link } from 'react-router-dom';

export const Item = ({ items, totalPrice, discountPrice, openMenuProduct, setOpenMenuProduct }) => {

    const handleClickProductMenu = () => {
        setOpenMenuProduct(!openMenuProduct);
    }

    // высчитываю скидку которую даёт магазин (скидка 15%)
    const discount = 15;
    const alpinaDiscount = Math.ceil(totalPrice * (discount / 100));

    const prices = [
        { name: "Сумма заказа", price: totalPrice, discount: 'order_content-list-prices_info-price' },
        { name: "Скидка Аlpina", price: alpinaDiscount, discount: 'order_content-list-prices_info-discount' },
        { name: "Скидка по промокоду", price: discountPrice, discount: 'order_content-list-prices_info-discount' },
    ];

    const products = items.slice(0, 5);

    return (
        <>
            <div className='order_content-list-head'>
                <h3>Состав заказа</h3>
                <div className='order_content-list-head-change'>
                    <p className='popular--categories--top__more button__more' onClick={handleClickProductMenu}>
                    изменить
                    <div className='border'></div>
                    </p>
                </div>
            </div>
            <div className='order_content-list-product'>
                {products.map((item, index) => (
                    <div className='order_content-list-product_item' key={index}>
                        <img src={item.img} alt={item.title} />
                    </div>
                ))}

                {items.length >= 5 && (
                    <div className='order_content-list-product_all' onClick={handleClickProductMenu}>
                        <div className='order_content-list-product_all-num'>+ {items.length - products.length}</div>
                    </div>
                )}
            </div>
            <div className='order_content-list-prices'>
                {prices.map((item, index) => (
                    <div className='order_content-list-prices_info' key={index}>
                        <h3>{item.name}</h3>
                        {item.name === "Сумма заказа" && <p className={item.discount}>{item.price}</p>}
                        {item.name !== "Сумма заказа" && <p className={item.discount}>- {item.price}</p>}
                    </div>
                ))}
                <div className='order_content-list-prices-line'></div>
                <div className='order_content-list-prices-totalPrice'>
                    <h2 className='order_content-list-prices-totalPrice_title'>Общая стоимость</h2>
                    <p className='order_content-list-prices-totalPrice_price'>{totalPrice - alpinaDiscount - discountPrice} руб.</p>
                </div>
            </div>
        </>
    )
}

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct, minusProduct, plusProduct } from '../../redux/slice/cartSlice';


export const MenuProductBlock = ( { title, price, img, id, count, totalPrice, discountPrice, openMenuProduct } ) => {

    const dispatch = useDispatch();

    const delProduct = () => {
      dispatch(deleteProduct(id));
    };
  
    const minusBtn = () => {
      dispatch(minusProduct(id));
    };
  
    const plusBtn = () => {
      dispatch(plusProduct(id));
    };

    // useEffect(() => {
    //     if (openMenuProduct) {
    //       document.body.style.overflow = 'hidden';
    //     } else {
    //       document.body.style.overflow = 'auto';
    //     }
      
    //     const handleBackgroundClick = (event) => {
    //         if (event.target === document.body) {
    //           if (openMenuProduct) {
    //           }
    //         }
    //       }

    //     document.body.style.backgroundColor =  openMenuProduct ? 'rgba(0, 0, 0, 0.38)' : 'transparent';
    //     document.body.style.filter = openMenuProduct ? 'brightness(0.5)' : 'none'; // добавляем фильтр
        
    //     return () => {
    //       document.body.style.overflow = 'auto';
    //       document.body.style.backgroundColor = 'transparent';
    //       document.body.style.filter = 'none';
    //       document.body.removeEventListener('click', handleBackgroundClick);
    //     };
    //   }, [openMenuProduct]);


    // высчитываю скидку которую даёт магазин (скидка 15%)
    const discount = 15;
    const alpinaDiscount = Math.ceil(totalPrice * (discount / 100));
    
    const prices = [
        { name: "Сумма заказа", price: totalPrice, discount: 'order_content-list-prices_info-price' },
        { name: "Скидка Аlpina", price: alpinaDiscount, discount: 'order_content-list-prices_info-discount' },
        { name: "Скидка по промокоду", price: discountPrice, discount: 'order_content-list-prices_info-discount' },
    ];

    return (
        <div className='order_menu-products_product-inner'>
            <div className='order_menu-products_product-block'>
                <div className='cart__card--left'>
                    <img className='cart__card--left__img' src={img} alt={title} />
                </div>
                <div className='order_menu-products_product-block_center'>
                    <div className='cart__card--right__title'>
                        <p className='cart__product--name'>{title}</p>
                    </div>
                    <div className='order_menu-products_product-count'>
                        <div className='cart__card--right__counter flex'>
                            <button disabled={count === 1} className='cart__card--right__counter--button cart__card--plus flex' onClick={minusBtn}>-</button>
                            <div className='cart__card--right__counter--button cart__card--count flex'>{count}</div>
                            <button className='cart__card--right__counter--button cart__card--minus flex' onClick={plusBtn}>+</button>
                        </div>
                    </div>
                </div>
                <div className='order_menu-products_product-block_right'>
                    <div className='cart__card--right__delete'>
                        <div className='cart__card--right__button--delete flex' onClick={delProduct}>
                            <svg fill="#000000" height="800px" width="800px" version="1.1" 
	                        viewBox="0 0 490 490">
                            <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
	                        489.292,457.678 277.331,245.004 489.292,32.337 "/>
                            </svg>
                        </div>
                    </div>
                    <div className='cart__card--right__price flex'>
                        <p>{price} руб.</p>
                    </div>
                </div>
            </div>

            <div className='order_menu-products_product_block-price'>
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
        </div>
    )
}

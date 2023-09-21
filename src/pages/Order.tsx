import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom';

import { Information } from './Order/Information';
import { OrderDelivery } from '../components/OrderDelivery';
import { Item } from '../components/Order/Item';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { MenuProduct } from '../components/Order/MenuProduct';
import { Stage } from '../components/Order/Stage';

export const Order = () => {
    const { items, totalPrice, } = useSelector((state: RootState) => state.cart);
    const discountPrice = useSelector((state: RootState) => state.cart.discountPrice);

    const [openMenuProduct, setOpenMenuProduct] = useState<boolean>(false);

    const [checkoutTwo, setCheckoutTwo] = useState<boolean>(false);

    const navigate = useNavigate()

    if (items.length <= 0) {
        return navigate(-1);
    };

    return (
        <div className='order'>
            <div className="container">
                <div className="order_header">
                    <Link to='/cart'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                            <path d="M19 8.5L1 8.5M1 8.5L6.29412 14M1 8.5L6.29412 3" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
                        </svg>
                    </Link>
                    <h3 className="order_header-name">Оформление заказа</h3>
                    <Link to='/cart'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <rect x="16" y="17" width="21.3483" height="1.5" rx="0.75" transform="rotate(-135 16 17)" fill="black"/>
                            <rect x="1" y="16" width="21.3483" height="1.5" rx="0.75" transform="rotate(-45 1 16)" fill="black"/>
                        </svg>
                    </Link>
                </div>
                <div className='order_content'>
                    <div className='order_content-order'>
                        <Information setCheckoutTwo={setCheckoutTwo} />
                        {checkoutTwo && <OrderDelivery />}

                        <Stage checkoutTwo={checkoutTwo} />
                    </div>
                    <div className='order_content-list'>
                        <Item items={items} totalPrice={totalPrice} discountPrice={discountPrice} openMenuProduct={openMenuProduct} setOpenMenuProduct={setOpenMenuProduct}/>
                    </div>
                </div>
            </div>
            <div className={openMenuProduct === true ? 'order_menu-products order_menu-products_active' : 'order_menu-products'}>
                <MenuProduct items={items} totalPrice={totalPrice} discountPrice={discountPrice} openMenuProduct={openMenuProduct} setOpenMenuProduct={setOpenMenuProduct}/>
            </div>
        </div>
    )
}

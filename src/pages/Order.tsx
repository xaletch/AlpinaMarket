import React from 'react'
import { Link } from 'react-router-dom';
import { Information } from './Order/Information';

export const Order = () => {

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
                        <Information />
                    </div>
                    <div className='order_content-list'></div>
                </div>
            </div>
        </div>
    )
}

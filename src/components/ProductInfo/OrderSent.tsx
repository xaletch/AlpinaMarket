import React from 'react'
import { Link } from 'react-router-dom';

export const OrderSent = ( { setIsModalWindowTwo } ) => {

    const handleClickCloseOrderSent = () => {
        setIsModalWindowTwo(false);
    };

    const scroll = () => {
        window.scrollTo(0, 1500)
    }

    return (
        <div className='product-info_modal-window'>
            <div className='product-info_modal-window-sent'>
                <div className='product-info_modal-window_close' onClick={handleClickCloseOrderSent}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none">
                        <path d="M10.7653 13.0909L10.8648 12.9871L10.7653 12.8833L5.20776 7.08418L6.414 5.82549L11.9627 11.6154L12.071 11.7284L12.1793 11.6154L17.728 5.82549L18.9342 7.08418L13.3767 12.8833L13.2772 12.9871L13.3767 13.0909L18.9342 18.8901L17.728 20.1488L12.1793 14.3588L12.071 14.2458L11.9627 14.3588L6.414 20.1488L5.20776 18.8901L10.7653 13.0909Z" fill="black" stroke="white" stroke-width="0.3"/>
                    </svg>
                </div>
                <div className='product-info_modal-window-sent_svg'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <mask id="mask0_11366_77721" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
                            <rect width="48" height="48" fill="white"/>
                        </mask>
                        <g mask="url(#mask0_11366_77721)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 24V23.6C4.21986 12.6091 13.2692 3.85593 24.2613 4.00177C35.2535 4.14762 44.0674 13.1378 43.9956 24.1307C43.9237 35.1236 34.9931 43.9978 24 44C12.9593 43.9879 4.01212 35.0407 4 24ZM12 26L20 34L36 18L33.18 15.16L20 28.34L14.82 23.18L12 26Z" fill="#1C9407"/>
                        </g>
                    </svg>
                </div>
                <div className='product-info_modal-window-sent_text'>
                    <h3>Спасибо, ваша заявка успешно отправлена!</h3>
                    <p>Информацию о статусе вашего 
                        заказа вы можете посмотреть 
                        в личном кабинете
                    </p>
                </div>
                <Link to='/' onClick={scroll}>
                    <button className='product-info_modal-window_form-btn'>Вернуться в магазин</button>
                </Link>
            </div>
        </div>
    )
}

import React from 'react'
import { footerArray } from './arrays/footer'

import pay from "../../src/assets/img/footer_pay.png"
import { Link } from 'react-router-dom'

export const Footer = () => {
    const [accordionOpen, setAccordionOpen] = React.useState<number | null>(null);

    const handleClickAccordion = (index: number) => {
        accordionOpen === index ? setAccordionOpen(null) : setAccordionOpen(index);
        console.log(accordionOpen);
    }

  return (
    <div className='footer'>
        <div className='footer__top'>
            <div className='container'>
                <div className='footer__top--inner'>
                    <ul className='footer__top--list flex'>
                        {footerArray.map((navigation, index) => (
                            <div key={index} className='footer__top--list__block'>
                                <p className={accordionOpen === index ? 'footer__top--list__title footer__top--accordion__header footer__top--selected__accordion' : 'footer__top--list__title footer__top--accordion__header'} onClick={() => handleClickAccordion(index)}>{navigation.title}
                                <span className='footer__svg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clip-path="url(#clip0_11226_29615)">
                                        <path d="M7.41 8.58984L12 13.1698L16.59 8.58984L18 9.99984L12 15.9998L6 9.99984L7.41 8.58984Z" fill="black" fill-opacity="0.12"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_11226_29615">
                                            <rect width="24" height="24" fill="white" transform="translate(24) rotate(90)"/>
                                        </clipPath>
                                    </defs>
                                    </svg>
                                </span>
                                </p>
                                <ul className={accordionOpen === index ? 'footer__top--list footer__top--list__active' :'footer__top--list footer__top__accordion--list'}>
                                    {navigation.titleList.filter(item => item.title).map((item, index) => (
                                        <li key={index} className={`footer__top--item ${item.className}`}><Link to={item.navigation}>{item.title}</Link></li>
                                    ))}
                                    <div className='footer__top--social--media flex'>
                                        {navigation.titleList.filter(item => item.dataSvg).map((item, index) => (
                                            <li className='social--media' key={index}>
                                                {item.dataSvg && (
                                                    <Link to=''
                                                        dangerouslySetInnerHTML={{ __html: item.dataSvg }}
                                                    />
                                                )}
                                            </li>
                                        ))}
                                    </div>
                                </ul>
                            </div>
                        ))}
                        <div className='footer__top--list__block footer__top--list__block--pay'>
                            <p className='footer__top--list__title'>Принимаем к оплате</p>
                            <div className='footer__top--list__pay'>
                                <img src={pay} alt="error" />
                            </div>
                            <div className='footer__top--list__block'>
                                <p className='footer__top--list footer__top--list--your--opinion'>Нам важно ваше мнение</p>
                                <button className='footer__top--list__button'>Написать нам</button>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
        <div className='footer__line'></div>
        <div className='footer__bottom'>
            <div className='container'>
                <div className='footer__bottom--inner flex'>
                    <div className='footer__bottom--left flex'>
                        <p className='footer__bottom--title'>© 2020 Alpina Market. All rights reserved</p>
                        <a className='footer__bottom--title' href='#'>Политика конфиденциальности</a>
                    </div>
                    <div className='footer__bottom--right'>
                        <p className='footer__bottom--title footer__bottom--right--title'>Developed by Legacystudio</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

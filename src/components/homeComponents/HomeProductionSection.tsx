import React from 'react'

import productionSection1 from "../../../src/assets/img/production-section_1.png"
import productionSection2 from "../../../src/assets/img/production-section_2.png"
import { Link } from 'react-router-dom'

export const HomeProductionSection = () => {
    const handleClickAbout = () => {
        window.scrollTo(0, 0);
    };

  return (
    <>
        <div className='home__production--section__top flex'>
            <h3 className='home__production--section__top--title'>Раздел о производстве</h3>
            <p className='home__production--section__top--description'>
                    Мы стремимся к европейскому качеству, поэтому используем фасады 
                и элементы декора, созданные итальянскими дизайнерами и произведенные 
                                    на ведущих фабриках Италии. 
            </p>
        </div>
        <div className='home__production--section__slider flex'>
            <div className='home__production--section__slider--block'>
                <img className='home__production--section__img' src={productionSection1} alt="error" />
            </div>
            <div className='home__production--section__slider--turntable'>
                <svg width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1422_60948)">
                    <rect x="20" y="22" width="47" height="37" fill="white"/>
                    <path d="M1.80401 61.8146C3.49859 67.8251 8.68264 68.9249 9.02847 69.1358C17.5602 71.4598 65.382 71.4668 74.0417 69.1358C79.9727 67.4205 81.0621 62.1604 81.2661 61.8146C83.5244 49.8003 83.6731 34.1375 81.1624 20.5048L81.2661 21.1826C79.5716 15.172 74.3875 14.0723 74.0417 13.8613C65.6241 11.5753 17.6778 11.4889 9.02847 13.8613C3.09743 15.5801 2.00805 20.8368 1.80401 21.1826C-0.613363 33.809 -0.734405 48.2959 1.80401 61.8146ZM33.2264 54.1267V28.905L54.8963 41.5349L33.2264 54.1267Z" fill="#A6331C"/>
                </g>
                <defs>
                    <clipPath id="clip0_1422_60948">
                        <rect width="83" height="83" fill="white"/>
                     </clipPath>
                </defs>
                </svg>
            </div>
        </div>
        <div className='home__production--section__bottom'>
            <Link to='about' onClick={handleClickAbout}>
                <button className='popular--categories--top__more button__more'>
                    больше о нас
                    <div className='border'></div>
                </button>
            </Link>
        </div>
    </>
  )
}

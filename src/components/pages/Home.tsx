import React from 'react'

// img
import classic from '../../assets/img/Classic_style.png';
import modern from '../../assets/img/Modern_style.png';

import { HomeCatalog } from '../HomeCatalog';
import { HomeCategory } from '../HomeCategory';
import { HomeFurniture } from '../HomeFurniture';
import { HomeBestOffes } from '../HomeBestOffes';
import { HomeTileCollections } from '../HomeTileCollections';
import { HomeProductionSection } from '../HomeProductionSection';

export const Home = () => {
  return (
    <div className='home'>
        <div className='container'>
            <div className='product--style flex'>
                <div className='product--style__left product--style__card'>
                    <img src={classic} alt='error'/>
                    <div className='product--style--bottom'>
                        <h3 className='product--style--bottom__title'>Классический стиль</h3>
                        <button className='product--style--bottom__more button__more'>подробнее</button>
                    </div>
                </div>
                <div className='product--style__right product--style__card'>
                    <img src={modern} alt='error'/>
                    <div className='product--style--bottom'>
                        <h3 className='product--style--bottom__title'>Современный стиль</h3>
                        <button className='product--style--bottom__more button__more'>подробнее</button>
                    </div>
                </div>
            </div>
            <div className='room--catalog'>
                <HomeCatalog />
            </div>
            <div className='popular--categories'>
                <HomeCategory />
            </div>
            <div className='home__furniture flex'>
                <HomeFurniture />
            </div>
            <div className='home__best--offer'>
                <HomeBestOffes />
            </div>
            <div className='home__tile--collections'>
                <HomeBestOffes />
            </div>
            <div className='home__production--section grid'>
                <HomeProductionSection />
            </div>
        </div>
    </div>
  )
}

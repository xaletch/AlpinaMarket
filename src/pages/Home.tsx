import React from 'react'

// img
import classic from '../assets/img/Classic_style.png';
import modern from '../assets/img/Modern_style.png';

import { HomeCatalog } from '../components/homeComponents/HomeCatalog';
import { HomeCategory } from '../components/homeComponents/HomeCategory';
import { HomeBestOffer } from '../components/homeComponents/HomeBestOffer'
import { HomeTileCollections } from '../components/homeComponents/HomeTileCollections';
import { HomeProductionSection } from '../components/homeComponents/HomeProductionSection';
import { ButtonMore } from '../components/ButtonMore';

export const Home = ({ products }) => {
  return (
    <div className='home'>
        <div className='container'>
            <div className='product--style flex'>
                <div className='product--style__left product--style__card'>
                    <img src={classic} alt='error'/>
                    <div className='product--style--bottom'>
                        <h3 className='product--style--bottom__title'>Классический стиль</h3>
                        <ButtonMore />
                    </div>
                </div>
                <div className='product--style__right product--style__card'>
                    <img src={modern} alt='error'/>
                    <div className='product--style--bottom'>
                        <h3 className='product--style--bottom__title'>Современный стиль</h3>
                        <ButtonMore />
                    </div>
                </div>
            </div>
            <div className='room--catalog'>
                <HomeCatalog />
            </div>
            <div className='popular--categories'>
                <HomeCategory />
            </div>  
            <div className='home__best--offer'>
                <HomeBestOffer products={products} />
            </div>
            <div className='home__tile--collections'>
                <HomeTileCollections />
            </div>
            <div className='home__production--section grid'>
                <HomeProductionSection />
            </div>
        </div>
    </div>
  )
}

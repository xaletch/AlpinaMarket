import React from 'react'

// img
import classic from '../../assets/img/Classic_style.png';
import modern from '../../assets/img/Modern_style.png';

import { HomeCatalog } from '../../components/Home/Catalog/HomeCatalog';
import { HomeCategory } from '../../components/Home/Category/HomeCategory';
import { HomeBestOffer } from '../../components/Home/BestOffer/HomeBestOffer';
import { HomeTileCollections } from '../../components/Home/TileCollections/HomeTileCollections';
import { HomeProductionSection } from '../../components/Home/ProductionSection/HomeProductionSection';
import { ButtonMore } from '../../components/ButtonMore/ButtonMore';

export const Home = ({ products }) => {
  return (
    <div className='home'>
        <div className='container'>
            <div className='product--style flex'>
                <div className='product--style__left product--style__card'>
                    <img className='product--style--img' src={classic} alt='error'/>
                    <div className='product--style--bottom'>
                        <h3 className='product--style--bottom__title'>Классический стиль</h3>
                        <ButtonMore />
                    </div>
                </div>
                <div className='product--style__right product--style__card'>
                    <img className='product--style--img' src={modern} alt='error'/>
                    <div className='product--style--bottom'>
                        <h3 className='product--style--bottom__title'>Современный стиль</h3>
                        <ButtonMore />
                    </div>
                </div>
            </div>
            <div className='home__room--catalog room--catalog'>
                <HomeCatalog />
            </div>
            <div className='home__popular--categories popular--categories'>
                <HomeCategory />
            </div>  
            <div className='home__best--offer'>
                <HomeBestOffer products={products} />
            </div>
            <div className='home__tile--collections'>
                <HomeTileCollections />
            </div>
            <div className='home__production--section flex'>
                <HomeProductionSection />
            </div>
        </div>
    </div>
  )
}

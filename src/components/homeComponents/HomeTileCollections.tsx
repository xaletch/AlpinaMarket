import React from 'react'

import stonelli from "../../assets/img/Плитка-stonelli.png";
import maracesh from "../../assets/img/Плитка-maracesh.png";

export const HomeTileCollections = () => {
  return (
    <>
        <div className='home__tile--collections__top flex'>
            <h2 className='home__tile--collections__top--title'>Коллекции ПЛИТКИ</h2>
            <button className='popular--categories--top__more button__more'>
                Все коллекции
                <div className='border'></div>
            </button>
        </div>
        <div className='home__tile--collections__bottom flex'>
            <div className='home__tile--collections__bottom--card--top'>
                <img src={stonelli} alt="error" />
                <div className='home__tile--collections__bottom--card--bottom flex'>
                    <h3 className='home__tile--collections__bottom--card--bottom__title'>Плитка stonelli</h3>
                    <p className='home__tile--collections__bottom--card--bottom__price'>от ₽ 2 000 м.кв.</p>
                </div>
            </div>
            <div className='home__tile--collections__bottom--card--top'>
                <img src={maracesh} alt="error" />
                <div className='home__tile--collections__bottom--card--bottom flex'>
                    <h3 className='home__tile--collections__bottom--card--bottom__title'>Плитка maracesh</h3>
                    <p className='home__tile--collections__bottom--card--bottom__price'>от ₽ 2 000 м.кв.</p>
                </div>
            </div>
        </div>
    </>
  )
}

import React from 'react'

import { homeCatalog } from './arrays/homeCatalog'

export const HomeCatalog = () => {
  return (
    <>
      <div className='room--catalog__top flex'>
        <h2 className='room--catalog__top--title'>Каталог по комнатам</h2>
        <button className='room--catalog--top__more button__more'>подробнее</button>
      </div>
      <div className='room--catalog__bottom flex'>
        {homeCatalog.map((obj) => (
          <div className='room--catalog__bottom--card'>
            <img src={obj.imageUrl} alt="" />
            <div className='room--catalog__bottom--card__bottom'>
              <button className='room--catalog__button'>{obj.title}</button>
            </div>
          </div>
        ))}
        <div className='room--catalog__button--slide button__slide flex'>
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6H17M17 6L12 1M17 6L12 11" stroke="black"/>
          </svg>
        </div>
      </div>
    </>
  )
}

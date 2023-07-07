import React from 'react'
import { homeCategoryArray } from '../arrays/homeCategory'

export const HomeCategory = () => {
  return (
    <>
        <div className='popular--categories__top flex'>
          <h2 className='popular--categories__top--title'>Каталог по комнатам</h2>
          <button className='popular--categories--top__more button__more'>подробнее</button>
        </div>
        <div className='popular--categories--bottom flex'>
          {homeCategoryArray.map((item, i) => (
            <div className='popular--categories__bottom--card flex' key={i}>
              <div className='popular--categories__bottom--card--img flex'>
                <img className={item.className} src={item.img} alt="error" />
              </div>
              <div className='popular--categories__bottom--card__bottom'>
                <button className='popular--categories__button'>{item.title}</button>
              </div>
            </div>
          ))}
        </div>
    </>
  )
}

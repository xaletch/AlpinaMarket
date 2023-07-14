import React from 'react'
import { homeCategoryArray } from '../arrays/homeCategory'
import { ButtonMore } from '../ButtonMore'

export const HomeCategory = () => {
  return (
    <>
        <div className='popular--categories__top flex'>
          <h2 className='popular--categories__top--title'>Популярные категории</h2>
          <ButtonMore />
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

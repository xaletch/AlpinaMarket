import React from 'react'

import { homeCatalog } from '../arrays/homeCatalog';
import { ButtonMore } from '../ButtonMore';

export const HomeCatalog = () => {
  return (
    <>
      <div className='room--catalog__top flex'>
        <h2 className='room--catalog__top--title'>Каталог по комнатам</h2>
        <ButtonMore />
      </div>
      <div className='room--catalog__bottom'>
        {homeCatalog.map((obj, index) => (
          <div className='room--catalog__bottom--card' key={index}>
            <img src={obj.imageUrl} alt="" />
            <div className='room--catalog__bottom--card__bottom'>
              <button className='room--catalog__button'>{obj.title}</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

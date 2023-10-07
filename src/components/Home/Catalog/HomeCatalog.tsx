import React from 'react'

import { homeCatalog } from '../../../array/homeCatalog';
import { ButtonMore } from '../../ButtonMore/ButtonMore';

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
            <img className='room--catalog--img' src={obj.imageUrl} alt="" />
            <div className='room--catalog__bottom--card__bottom'>
              <button className='room--catalog__button'>{obj.title}</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

import React from 'react'

import { HomeBestOffer } from '../../components/homeComponents/HomeBestOffer'

export const PageNotFound = () => {
  return (
    <div className='page-not-found container'>
      <h2 className='page-not-found__title'>Страница не найдена</h2>
      <div className='page-not-found__best--offer'>
        <HomeBestOffer />
      </div>
    </div>
  )
}

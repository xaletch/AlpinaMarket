import React from 'react'

import { HomeBestOffer } from '../../components/Home/BestOffer/HomeBestOffer';
import { ButtonComeBack } from '../../components/ButtonComeBack/ButtonComeBack';

export const PageNotFound = ({ products }) => {
  return (
    <div className='page-not-found container'>
      <ButtonComeBack />
      <h2 className='page-not-found__title'>Страница не найдена</h2>
      <div className='page-not-found__best--offer'>
        <HomeBestOffer products={products} />
      </div>
    </div>
  )
}

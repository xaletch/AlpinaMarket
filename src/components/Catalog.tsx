import React from 'react'
import { ButtonComeBack } from './ButtonComeBack'
import { ProductBlock } from './ProductBlock'

export const Catalog = ({ products,  }) => {
  return (
    <div className='catalog'>
        <div className='container'>
            <ButtonComeBack />
            <h2 className='cart__title'>Каталог</h2>
            <div className='home__best--offer__bottom flex'>
                {products.map((obj: any ) => <ProductBlock key={obj.id} {...obj}/> )}
            </div>
        </div>
    </div>
  )
}

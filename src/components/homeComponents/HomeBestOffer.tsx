import React from 'react'
import { ButtonMore } from '../ButtonMore'
import { ProductBlock } from '../ProductBlock'
import { Link } from 'react-router-dom';

export const HomeBestOffer = ({ products, cardButton, setCardButton }) => {

  const productBestOffer = products.slice(0, 8);

  return (
    <>
      <div className='home__best--offer__top flex'>
        <h3 className='home__best--offer__top--title'>Лучшее предложение</h3>
          <Link to='catalog'>
            <ButtonMore/>
          </Link>
      </div>
      <div className='home__best--offer__bottom flex'>
      {productBestOffer.map((obj: any) => <ProductBlock key={obj.id} {...obj} cardButton={cardButton} setCardButton={setCardButton} />)}
      </div>
    </>
  )
}

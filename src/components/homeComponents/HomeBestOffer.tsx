import React from 'react'
import { ButtonMore } from '../ButtonMore'
import { ProductBlock } from '../ProductBlock'
import { Link } from 'react-router-dom';

interface ProductProps {
  id: string;
  title: string;
  img: string;
  price: number;
  sale: string;
  discount: string;
  size: string;
  gallery: [];
};

interface Product {
  products: ProductProps[];
}

export const HomeBestOffer: React.FC<Product> = ({ products }) => {

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
      {productBestOffer.map((obj: any) => <ProductBlock key={obj.id} {...obj} />)}
      </div>
    </>
  )
}

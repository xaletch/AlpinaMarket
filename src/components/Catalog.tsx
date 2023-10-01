import React, { useState } from 'react';
import { ButtonComeBack } from './ButtonComeBack';
import { ProductBlock } from './ProductBlock';
import { Filters } from './Filters';
import { FilterMenu } from "./FilterMenu/FilterMenu";

export const Catalog = ({ products }) => {
  const [openMenuFilter, setOpenMenuFilter] = useState<boolean>(false);
  
  return (
    <div className='catalog'>
        <div className='container'>
          <FilterMenu openMenuFilter={openMenuFilter} setOpenMenuFilter={setOpenMenuFilter} />
          <ButtonComeBack />
          <h2 className='cart__title'>Каталог</h2>
          <Filters setOpenMenuFilter={setOpenMenuFilter} />
          <div className='home__best--offer__bottom flex'>
              {products.map((obj: any ) => <ProductBlock key={obj.id} {...obj}/> )}
          </div>
        </div>
    </div>
  )
}

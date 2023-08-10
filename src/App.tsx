import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom"

import './scss/app.scss'

import {Header} from './components/Header'
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { OurSalons } from './pages/OurSalons';
import { Delivery } from './pages//Delivery';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';
import { Cart } from './pages/Cart';
import { Catalog } from './components/Catalog';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts, selectProductData } from './redux/slice/productSlice';
import { search } from './redux/slice/SearchSlice';
import { ProductInfo } from './pages/ProductInfo';

function App() {
  const dispatch = useDispatch();
  const { item } = useSelector(selectProductData)
  const { searchValue } = useSelector(search);
  const isSearch = React.useRef(false);

  const [selected, setSelected] = React.useState<number | null>(0);

  const getProducts = async () => {
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchProducts({
        search,
      })
    );
  };

  React.useEffect(() => {
    if (!isSearch.current) {
      getProducts();
    } else {
      isSearch.current = false
    }
  }, [searchValue])

  const onSelected = (id: number) => {
    setSelected(id);
  }

  return (
    <div className="App">
        <Header searchValue={searchValue} products={item} />
        <Routes>
          <Route path='/' element={<Home products={item} />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='salons' element={<OurSalons selected={selected} onSelected={onSelected} />}></Route>
          <Route path='paymentDelivery' element={<Delivery selected={selected} onSelected={onSelected} />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
          <Route path='card' element={<Cart />}></Route>
          <Route path='catalog' element={<Catalog products={item} />}></Route>
          <Route path='product/:id' element={<ProductInfo />}></Route>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;

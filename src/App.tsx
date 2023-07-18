import React, { useState } from 'react';
import axios from "axios";
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

interface Product {
  price: number,
  title: string,
  img: string,
  id: string,
  products: Product[];
}

function App() {
  const [searchValue, setSearchValue] = useState<string>('');

  const [selected, setSelected] = React.useState<number | null>(0);

  const [products, setProducts] = useState<Product[]>([]);

  const search = searchValue ? `&search=${searchValue}` : '';

  console.log(products)

  React.useEffect(() => {
      axios.get(`https://64a97f128b9afaf4844ac01b.mockapi.io/Products?&${search}`)
      .then(res => {
          setProducts(res.data)
      })
  }, [setProducts, searchValue])

  const onSelected = (id: number) => {
    setSelected(id);
  }

  return (
    <div className="App">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} products={products} />
        <Routes>
          <Route path='/' element={<Home products={products} />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='salons' element={<OurSalons selected={selected} onSelected={onSelected} />}></Route>
          <Route path='paymentDelivery' element={<Delivery selected={selected} onSelected={onSelected} />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
          <Route path='card' element={<Cart />}></Route>
          <Route path='catalog' element={<Catalog products={products} />}></Route>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;

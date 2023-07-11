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
import { Business } from './pages/Business';

interface Product {
  createdAt: string,
  name: string,
  avatar: string,
  id: string,
}

function App() {
  const [searchValue, setSearchValue] = useState<string>('Белый стул');

  const [products, setProducts] = useState<Product[]>([])

  const search = searchValue ? `&search=${searchValue}` : '';

  React.useEffect(() => {
      axios.get(`https://64a97f128b9afaf4844ac01b.mockapi.io/Products?&${search}`)
      .then(res => {
          setProducts(res.data) 
      })
  }, [setProducts, searchValue])
  
  return (
    <div className="App">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} products={products} />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='salons' element={<OurSalons />}></Route>
          <Route path='payment&delivery' element={<Delivery />}></Route>
          <Route path='business' element={<Business/>}></Route>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import axios from "axios";
import { Routes, Route } from "react-router-dom"

import './scss/app.scss'

import {Header} from './components/Header'
import { Home } from './components/pages/Home';
import { Footer } from './components/Footer';

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
        </Routes>
        <Footer />
    </div>
  );
}

export default App;

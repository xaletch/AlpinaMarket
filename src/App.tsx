import React from 'react';
import { Routes, Route } from "react-router-dom"

import './scss/app.scss'

import {Header} from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { OurSalons } from './pages/OurSalons/OurSalons';
import { Delivery } from './pages/Delivery/Delivery';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';
import { Cart } from './pages/Cart/Cart';
import { Catalog } from './components/Catalog/Catalog';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts, selectProductData } from './redux/slice/productSlice';
import { search } from './redux/slice/SearchSlice';
import { ProductInfo } from './pages/ProductInfo/ProductInfo';
import { Order } from './pages/Order/Order';

function App() {
  const dispatch = useDispatch();
  const { item } = useSelector(selectProductData);
  const { searchValue } = useSelector(search);
  const isSearch = React.useRef(false);

  const [selected, setSelected] = React.useState<number | null>(0);

  const getProducts = async () => {
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(fetchProducts({search}));
  };

  React.useEffect(() => {
    if (!isSearch.current) {
      getProducts();
    } else {
      isSearch.current = false;
    };
  }, [searchValue]);

  const onSelected = (id: number) => {
    setSelected(id);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="App">
        <Header searchValue={searchValue} products={item} />
        <Routes>
          <Route path='AlpinaMarket' element={<Home products={item} />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='salons' element={<OurSalons selected={selected} onSelected={onSelected} />}></Route>
          <Route path='paymentDelivery' element={<Delivery selected={selected} onSelected={onSelected} />}></Route>
          <Route path='*' element={<PageNotFound products={item} />}></Route>
          <Route path='cart' element={<Cart />}></Route>
          <Route path='AlpinaMarket/catalog' element={<Catalog products={item} />}></Route>
          <Route path='product/:id' element={<ProductInfo />}></Route>
          <Route path='cart/order' element={<Order />}></Route>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react'

import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Gallery } from '../components/ProductInfo/Gallery';
import { ProductSettings } from '../components/ProductInfo/ProductSettings';
import { ButtonComeBack } from '../components/ButtonComeBack';
import { ProductDescription } from '../components/ProductInfo/ProductDescription';
import { OrderModalWindow } from '../components/ProductInfo/OrderModalWindow';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { OrderSent } from '../components/ProductInfo/OrderSent';
import { selectItemCount } from '../redux/slice/cartSlice';

interface ProductInfoInterface {
    img: string;
    title: string;
    price: number;
    count: number;
    id: number;
    gallery: string;
    innerName: string,
    material: string,
    materialOrder: string,
};

export const ProductInfo = () => {
    const { id } = useParams();

    const [product, setProduct] = useState<ProductInfoInterface>();
    const [isModalWindow, setIsModalWindow] = useState<boolean>(false);
    const [isModalWindowTwo, setIsModalWindowTwo] = useState<boolean>(false);

    const navigate= useNavigate();

    const count = useSelector(selectItemCount(id));

    useEffect(() => {
        async function fetchProducts() {
            try {
                const { data } = await axios.get(`https://64a97f128b9afaf4844ac01b.mockapi.io/Products/${id}`);
                setProduct(data);
                console.log(data)
            } catch (error) {
                console.log(error)
                navigate('/');
            }
        }

        fetchProducts();
    }, [id]);

    // useEffect(() => {
    //     document.body.style.backgroundColor = !(isModalWindow || isModalWindowTwo) ? 'transparent' : 'rgba(0, 0, 0, 0.38)';
    //     document.body.style.filter = !(isModalWindow || isModalWindowTwo) ? 'none' : 'brightness(0.5)';
        
    //     return () => {
    //       document.body.style.backgroundColor = 'transparent';
    //       document.body.style.filter = 'none';
    //     };
    //   }, [isModalWindow, isModalWindowTwo]);
    
  return (
    <div className='product-info'>
        <h1>{product?.count}</h1>
        <div className='container'>
            <Link to='/' className='will-return__item will-return--back'>На главную</Link>
            <div className='product-info_block'>
                <Gallery img={product?.img} gallery={product?.gallery} />
                <ProductSettings setIsModalWindow={setIsModalWindow} id={product?.id} img={product?.img} title={product?.title} price={product?.price} innerName={product?.innerName} material={product?.material} materialOrder={product?.materialOrder} />
            </div>
            <div className='product-info_description'>
                <ProductDescription />
            </div>
            {isModalWindow && (
                <OrderModalWindow img={product?.img} title={product?.title} price={product?.price} id={product?.id} count={count} setIsModalWindow={setIsModalWindow} setIsModalWindowTwo={setIsModalWindowTwo} />
            )}
            {isModalWindowTwo && (
                <OrderSent setIsModalWindowTwo={setIsModalWindowTwo} />
            )}
        </div>
    </div>
  )
}

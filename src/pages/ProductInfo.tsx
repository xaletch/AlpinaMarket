import React, { useState, useEffect } from 'react'

import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Gallery } from '../components/ProductInfo/Gallery';
import { ProductSettings } from '../components/ProductInfo/ProductSettings';


interface ProductInfoInterface {
    img: string;
    title: string;
    price: number;
    gallery: string;
}

export const ProductInfo = () => {
    const { id } = useParams();

    const [product, setProduct] = useState<ProductInfoInterface>();

    const navigate= useNavigate();

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

  return (
    <div className='product-info'>
        <div className='container'>
            <div className='product-info_block'>
                <Gallery img={product?.img} gallery={product?.gallery} />
                <ProductSettings title={product?.title} price={product?.price} />
            </div>
        </div>
    </div>
  )
}

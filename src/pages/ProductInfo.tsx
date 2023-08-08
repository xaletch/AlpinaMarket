import React, { useState, useEffect } from 'react'

import axios from 'axios';
import { useParams } from 'react-router-dom';

export const ProductInfo = () => {
    const { id } = useParams();

    const [product, setProduct] = useState<{
        img: string;
        title: string;
        price: number;
    }>();

    useEffect(() => {
        async function fetchProducts() {
            try {
                const { data } = await axios.get('https://64a97f128b9afaf4844ac01b.mockapi.io/' + id);
                setProduct(data);
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
         fetchProducts();
    }, []);

  return (
    <div className='product--info'>
        <div className='container'>
            <h2>{product.title}</h2>
        </div>
    </div>
  )
}

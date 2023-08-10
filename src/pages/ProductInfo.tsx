import React, { useState, useEffect } from 'react'

import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

interface ProductInfoInterface {
    img: string;
    title: string;
    price: number;
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
    <div className='product--info'>
        <div className='container'>
            <img src={product?.img} alt="" />
            <h2>{product?.title}</h2>
            <p>{product?.price}</p>
        </div>
    </div>
  )
}

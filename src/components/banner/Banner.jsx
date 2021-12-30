import React, { useEffect } from 'react'
import Paper from '@mui/material/Paper';

import banner from '../../assets/banner_open.png';
import product_sample_1 from '../../assets/product_sample_1.jpg';
import product_sample_2 from '../../assets/fresh-bread.jpg';
import product_sample_3 from '../../assets/hallulla.jpg';
import product_sample_4 from '../../assets/pack.jpg';

import {Product} from '../../components';
import {ShoppingMenu} from '../../components';

import './banner.css'
import { Stack } from '@mui/material';

import { useContext } from 'react';
import ProductContext from '../../context/product/ProductContext';

const Banner = () => {

    const {products, getProducts} = useContext(ProductContext);

    useEffect(() => {
        getProducts();
        console.log(products);
    }, [])

    return (
        <div className="banner">
            <div className="banner-shoppingMenu">
                <ShoppingMenu/>
            </div>
            <div className="banner-container">
                    {products.map((product) => (
                        <Product product={product} key={product.id}/>
                    ))}
            </div>
        </div>
    )
}

export default Banner

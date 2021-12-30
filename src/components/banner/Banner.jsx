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
import ShoppingCartContext from '../../context/shoppingCart/ShoppingCartContext';

const Banner = () => {

    const {products, getShoppingCart} = useContext(ShoppingCartContext);

    useEffect(() => {
        getShoppingCart();
        console.log(products);
    }, [products])

    return (
        <div className="banner">
            <div className="banner-shoppingMenu">
                <ShoppingMenu/>
            </div>
            <div className="banner-container">
                    {console.log(products.length)}
                    {products.map((product) => (
                        <Product product_img={product.imageUrl} product_title={product.title}/>
                    ))}
            </div>
        </div>
    )
}

export default Banner

import React, { useEffect } from 'react'

import {Product} from '../../components';
import {ShoppingMenu} from '../../components';

import './banner.css'

import { useContext } from 'react';
import ProductContext from '../../context/product/ProductContext';

const Banner = () => {

    const {products, getProducts} = useContext(ProductContext);

    useEffect(() => {
        getProducts();
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

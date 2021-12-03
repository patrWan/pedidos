import React from 'react'
import Paper from '@mui/material/Paper';

import banner from '../../assets/banner_open.png';
import product_sample_1 from '../../assets/product_sample_1.jpg';
import product_sample_2 from '../../assets/fresh-bread.jpg';
import product_sample_3 from '../../assets/hallulla.jpg';
import product_sample_4 from '../../assets/pack.jpg';

import {Product} from '../../components';

import './banner.css'
import { Stack } from '@mui/material';
const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-container">
                    <Product product_img={product_sample_1} product_title={"Producto 1"}/>
                    <Product product_img={product_sample_2} product_title={"Producto 2"}/>
                    <Product product_img={product_sample_3} product_title={"Producto 3"}/>
                    <Product product_img={product_sample_4} product_title={"Producto 4"}/>
            </div>
        </div>
    )
}

export default Banner

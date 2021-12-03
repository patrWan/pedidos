import React from 'react'
import Paper from '@mui/material/Paper';

import banner from '../../assets/banner_open.png';

import {Product} from '../../components';

import './banner.css'
const Banner = () => {
    return (
        <Paper elevation={12} className="banner">
            <div className="banner-container">
                <Product/>
                <Product/>
            </div>
        </Paper>
    )
}

export default Banner

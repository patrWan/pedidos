import { Button, ImageListItem, ImageListItemBar, Paper } from '@mui/material';
import React from 'react';

import image from '../../assets/fresh-bread.jpg';
import './product.css';

const Product = () => {
    return (
        <Paper elevation={3} className="product">
            <div className="product-title">

            </div>
            <ImageListItem>
                <img
                    src={`${image}?w=248&fit=crop&auto=format`}
                    srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt="imgtest"
                    loading="lazy"
                />
                <ImageListItemBar
                    title="aaa"
                    subtitle="@patr.wan"
                    actionIcon={
                        <Button variant="contained">Reservar</Button>
                    }
                />
            </ImageListItem> 
            
        </Paper>
    )
}

export default Product;


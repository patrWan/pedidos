import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './product.css';

import ShoppingCartContext from '../../context/shoppingCart/ShoppingCartContext';

import UserContext from '../../context/user/UserContext';

const Product = (props) => {

    const { product } = props;

    const { addProduct } = useContext(ShoppingCartContext);

    const { userFrom } = useContext(UserContext);

    return (
        <div>
            <Card sx={{ maxWidth: 345, minHeight: 450, margin: 1 }}>
                <CardMedia className='card-media'>
                    <img src={product.imageUrl} className="product-img"/>
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="large" color="success" >${product.price}</Button>

                    {userFrom ?
                        <Button size="small" variant="contained" onClick={() => addProduct(product)}>Agregar</Button>
                        :
                        <Typography gutterBottom variant="body2" component="div" color="Highlight" fontSize={16}>
                            Inicie sesión para utilizar las funciones de usuario.
                        </Typography>
                    }
                </CardActions>
            </Card>
        </div>
    );
}

export default Product

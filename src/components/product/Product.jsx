import React, {useContext} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './product.css';

import ShoppingCartContext from '../../context/shoppingCart/ShoppingCartContext';

const Product = (props) => {
    const {product} = props;

    const {addProduct} = useContext(ShoppingCartContext);

  return (
    <div>
        <Card sx={{ maxWidth: 345 , minHeight: 400, margin : 1}}>
        <CardMedia
            component="img"
            height="100"
            image={product.imageUrl}
            alt="green iguana"
            className="product-img"
        />
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
            <Button size="small" variant="contained" onClick={() => addProduct(product)}>Agregar</Button>
        </CardActions>
        </Card>
    </div>
  );
}

export default Product

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './product.css'
const Product = (props) => {
    const {product_img, product_title} = props;
  return (
    <div>
        <Card sx={{ maxWidth: 345 , minHeight: 400, margin : 1}}>
        <CardMedia
            component="img"
            height="100"
            image={product_img}
            alt="green iguana"
            className="product-img"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {product_title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="large" color="success">$170</Button>
            <Button size="small" variant="contained">Agregar</Button>
        </CardActions>
        </Card>
    </div>
  );
}

export default Product

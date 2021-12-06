import { Button, Paper } from '@mui/material'
import React from 'react'
import './shoppingMenu.css'
const ShoppingMenu = () => {
    return (
        <div className="shoppingMenu">
            <Paper className="shoppingMenu-main" elevation={24}>
                <div className="shoppingMenu-main_title">
                    Carrito de compras
                </div>
                <div className="shoppingMenu-main_products">
                    productos
                </div>
                <div className="shoppingMenu-main_actions">
                    <Button variant="outlined">Confirmar Pedido</Button>
                </div>
                
            </Paper>
            
        </div>
    )
}

export default ShoppingMenu

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
                    <table border="1" cellPadding="1">
                        <thead>
                            <tr>
                                <td>Producto</td>
                                <td>Cantidad</td>
                                <td>Precio Unitario</td>
                                <td>SubTotal</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td align="center">Producto 1</td>
                                <td align="center">6</td>
                                <td align="center">$170</td>
                                <td align="center">${ 6 * 170}</td>
                            </tr>
                            <tr>
                                <td colSpan="3" align="center"><b>TOTAL</b></td>
                                <td align="center"><b>${ 6 * 170}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="shoppingMenu-main_actions">
                    <Button variant="outlined">Confirmar Pedido</Button>
                </div>

            </Paper>

        </div>
    )
}

export default ShoppingMenu

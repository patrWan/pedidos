import { Button, Paper } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import './shoppingMenu.css'

import ShoppingCartContext from '../../context/shoppingCart/ShoppingCartContext';

const ShoppingMenu = () => {

    const { shoppingList, deleteProduct } = useContext(ShoppingCartContext);

    useEffect(() => {
    }, [])

    return (
        <div className="shoppingMenu">
            <Paper className="shoppingMenu-main" elevation={24}>
                <div className="shoppingMenu-main_title">
                    Carrito de compras ({shoppingList.length})
                </div>
                <div className="shoppingMenu-main_products">
                    <table border="1" cellPadding="1" className="table">
                        <thead>
                            <tr>
                                <td>Producto</td>
                                <td>Cantidad</td>
                                <td>Precio Unitario</td>
                                <td>SubTotal</td>
                                <td>Acciones</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                shoppingList.map(p => {
                                    return (
                                        <tr key={p.idProducto}>
                                            <td align="center">{p.title}</td>
                                            <td align="center">
                                                {p.quantity}
                                            </td>
                                            <td align="center">{p.price}</td>
                                            <td align="center">{p.subTotal}</td>
                                            <td align="center">
                                                <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => deleteProduct(p)}>Eliminar</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            <tr>
                                <td colSpan="3" align="center"><b>TOTAL</b></td>
                                <td align="center"><b>${0}</b></td>
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

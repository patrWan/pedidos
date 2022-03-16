import { Button, Paper } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import './shoppingMenu.css'

import ShoppingCartContext from '../../context/shoppingCart/ShoppingCartContext';

import { db } from '../../firebase/firebaseConfig';
import { collection, addDoc } from "firebase/firestore";

const ShoppingMenu = () => {

    const { shoppingList, deleteProduct, total, addQuantity, removeQuantity } = useContext(ShoppingCartContext);

    useEffect(() => {
    }, [])

    async function confirmOrder() {

        try {
            const docRef = await addDoc(collection(db, "orders"), {
                id: "002",
                date: "16/03/2022",
                total: 3400
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

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
                                <th className="text-center">Producto</th>
                                <th>Cantidad</th>
                                <th>Prec. Unit.</th>
                                <th>SubTotal</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                shoppingList.map(p => {
                                    return (
                                        <tr key={p.idProducto}>
                                            <td align="center" width={150}>{p.title}</td>
                                            <td align="center">
                                                <button onClick={() => removeQuantity(p)} disabled={p.quantity > 1 ? false : true}>-</button>
                                                {p.quantity}
                                                <button onClick={() => addQuantity(p)}>+</button>
                                            </td>
                                            <td align="center">${p.price}</td>
                                            <td align="center">${p.subTotal}</td>
                                            <td align="center">
                                                <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => deleteProduct(p)}>Eliminar</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            <tr>
                                <td colSpan="3" align="center"><b>TOTAL</b></td>
                                <td align="center"><b>${total}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="shoppingMenu-main_actions">
                    <Button variant="outlined" onClick={confirmOrder}>Confirmar Pedido</Button>
                </div>

            </Paper>

        </div>
    )
}

export default ShoppingMenu

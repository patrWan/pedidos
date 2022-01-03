import React, { useReducer } from 'react';

import ShoppingCartReducer from './ShoppingCartReducer';
import ShoppingCartContext from './ShoppingCartContext';

const ShoppingCart = (props) => {

    const initialState = {
        shoppingList: [],
        total : 0
    }

    const [state, dispatch] = useReducer(ShoppingCartReducer, initialState)

    const addProduct = async (product) => {

        const newProduct = {
            "idProducto": product.id,
            "title": product.title,
            "price": product.price,
            "quantity": 1,
            "subTotal": product.price,
        }

        dispatch({
            type: 'ADD_PRODUCT',
            payload: newProduct,
        })

    }

    const deleteProduct = async (product) => {
        console.log('delete product state => ', product);
        dispatch({
            type: 'DELETE_PRODUCT',
            payload: product,
        })
    }

    return (
        <ShoppingCartContext.Provider value={{
            shoppingList: state.shoppingList,
            total: state.total,
            addProduct,
            deleteProduct
        }}>
            {props.children}
        </ShoppingCartContext.Provider>
    )

}


export default ShoppingCart;
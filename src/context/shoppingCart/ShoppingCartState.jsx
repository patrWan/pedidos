import React, { useReducer } from 'react';

import ShoppingCartReducer from './ShoppingCartReducer';
import ShoppingCartContext from './ShoppingCartContext';

const ShoppingCart = (props) => {

    const initialState = {
        shoppingList: [],
    }

    const [state, dispatch] = useReducer(ShoppingCartReducer, initialState)

    const getShoppingCart = async () => {
    }

    const addProduct = async (product) => {
        console.log(state.shoppingList)
        const new_list = state.shoppingList;

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
            selectedUser: state.selectedUser,
            addProduct,
            deleteProduct
        }}>
            {props.children}
        </ShoppingCartContext.Provider>
    )

}


export default ShoppingCart;
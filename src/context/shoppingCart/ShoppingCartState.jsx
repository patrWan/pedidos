import React, { useReducer } from 'react';

import ShoppingCartReducer from './ShoppingCartReducer';
import ShoppingCartContext from './ShoppingCartContext';

const ShoppingCart = (props) => {

    const initialState = {
        shoppingList: [
            {
                "idProducto": '',
                "title": '',
                "price": '',
                "quantity": null,
                "subTotal": '',
            }

        ],
        selectedUser: null,
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

    return (
        <ShoppingCartContext.Provider value={{
            shoppingList: state.shoppingList,
            selectedUser: state.selectedUser,
            addProduct,
        }}>
            {props.children}
        </ShoppingCartContext.Provider>
    )

}


export default ShoppingCart;
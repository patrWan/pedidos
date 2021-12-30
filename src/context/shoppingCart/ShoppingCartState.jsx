import React, { useReducer } from 'react';

import ShoppingCartReducer from './ShoppingCartReducer';
import ShoppingCartContext from './ShoppingCartContext';

import productList from '../../firebase/database.json';

const ShoppingCart = (props) => {

    const initialState = {
        products : [],
        selectedUser : null,
    }   
    
    const [state, dispatch] = useReducer(ShoppingCartReducer, initialState)
    
    const getShoppingCart = async () => {
        const p = await productList;
        console.log(p);

        dispatch({
            type : 'GET_PRODUCTS',
            payload : p,
        })
    }

    const addProduct = async (product) => {
        console.log("=== add product ===");
        state.products.add(product);
    }

    return (
        <ShoppingCartContext.Provider value={{
            products : state.products,
            selectedUser : state.selectedUser,
            getShoppingCart,
        }}>
            {props.children}
        </ShoppingCartContext.Provider>
    )

}


export default ShoppingCart;
import React, { useReducer } from 'react';

import ProductReducer from './ProductReducer';
import ProductContext from './ProductContext';

import productList from '../../firebase/database.json';

const ProductState = (props) => {

    const initialState = {
        products : [],
    }   
    
    const [state, dispatch] = useReducer(ProductReducer, initialState)
    
    const getProducts = async () => {
        const p = await productList;
        console.log(p);

        dispatch({
            type : 'GET_PRODUCTS',
            payload : p,
        })
    }
    return (
        <ProductContext.Provider value={{
            products : state.products,
            getProducts,
        }}>
            {props.children}
        </ProductContext.Provider>
    )

}


export default ProductState;
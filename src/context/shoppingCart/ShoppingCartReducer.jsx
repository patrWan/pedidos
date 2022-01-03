import { GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT } from '../types';

export default (state, action) => {
    const { payload, type } = action;


    switch (type) {
        case ADD_PRODUCT:
            const item = state.shoppingList.find(product => product.idProducto === payload.idProducto);

            if(item){
                return {
                    ...state,
                    shoppingList : state.shoppingList.map(item => item.idProducto === payload.idProducto 
                        ? 
                        {
                            ...item,
                            quantity: item.quantity + 1,
                            subTotal: (item.quantity + 1) * item.price
                        
                        }
                        : item
                    ),
                }
            }
            return {
                ...state,
                shoppingList:  [...state.shoppingList, payload]
            }

        case DELETE_PRODUCT:
            console.log('delete product reducer => ', payload.idProducto);
            return {
                ...state,
                shoppingList : state.shoppingList.filter(product => product.idProducto !== payload.idProducto)
            }
        default:
            return state;
    }
}
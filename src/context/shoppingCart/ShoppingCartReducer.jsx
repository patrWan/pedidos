import { GET_PRODUCTS, ADD_PRODUCT } from '../types';

export default (state, action) => {
    const { payload, type } = action;


    switch (type) {
        case ADD_PRODUCT:
            console.log(payload.idProducto)
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


        default:
            return state;
    }
}
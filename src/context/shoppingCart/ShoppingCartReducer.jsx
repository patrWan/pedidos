import {GET_PRODUCTS, ADD_PRODUCT} from '../types';

export default (state, action ) => {
    const {payload, type} = action;
    

    switch(type){
        case GET_PRODUCTS:
            return{
                ...state,
                products : action.payload,
                
            }

        default:
            return state;
    }
}
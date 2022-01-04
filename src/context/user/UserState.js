import React, { useReducer } from 'react';

import UserReducer from './UserReducer';
import UserContext from './UserContext';

const UserState = (props) => {
    const initialState = {
        user: null,
    }
    const [state, dispatch] = useReducer(UserReducer, initialState)

    const login = (user) => {
        dispatch({
            type: 'LOGIN',
            payload: user,
        })
    }

    return (
        <UserContext.Provider value={{
            user: state.user,
            login
        }}>
            {props.children}
        </UserContext.Provider>
    )

}


export default UserState;
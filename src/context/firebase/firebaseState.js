import React,{useReducer} from "react";
import {FireBaseContext} from "./firebaseContext";
import {firebaseReducer} from "./firebaseReducer";

export const FireBaseState = ({children}) => {
    const initialState = {
        notes: [],
        loading: false
    }
    const [state, dispatch] = useReducer(firebaseReducer, initialState)
    return (
        <FireBaseContext.Provider value={{

        }}> {children}</FireBaseContext.Provider>
    )
}

import React from 'react'
import { createStore } from 'redux'
import { ActionTypes } from "./ActionTypes"
// import { composeWithDevTools } from 'redux-devtools-extension';
// const store = createStore(reducers, composeWithDevTools())


const initialState = {
    user: null

}
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case (ActionTypes.SET_USER):
            return {
                ...state, user: action.payload
            }
        default:
            return state
    }

}

const store = createStore(
    userReducer,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store






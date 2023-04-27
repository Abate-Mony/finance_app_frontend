import { createStore } from "redux"
import axios from "axios"
import { useState } from 'react'
// const url = process.env.REACT_APP_BASE_LOCAL_URL

const initialState = {
    openChat: false,
    openSideBar: false
}



const appReducer = async(initialState, action) => {
    switch (action.type) {
        case "openChat":
            return {...initialState, openChat: !initialState.openChat }
        case "openSideBar":
            return {...initialState, openSideBar: !initialState.openSideBar }
        default:
            return initialState
    }
}
export const store = createStore(appReducer, initialState)
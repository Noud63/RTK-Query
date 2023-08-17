import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {},
    isLoggedIn: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')).isLoggedIn : false
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
           state.userInfo = action.payload
           state.isLoggedIn = true
           localStorage.setItem('userInfo', JSON.stringify({...action.payload, isLoggedIn:true}))
        },
        logOut: ( state, action) => {
            state.userInfo = {}
            state.isLoggedIn = false
            localStorage.removeItem('userInfo')
        }
    }
})

export const { setCredentials, logOut } = loginSlice.actions
export default loginSlice.reducer
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {apiSlice } from "./src/slices/apiSlice";
import loginReducer from './src/features/loginSlice.js'

export const store = configureStore({
    reducer: {
        login: loginReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },

 middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

setupListeners(store.dispatch)
console.log(store.getState())
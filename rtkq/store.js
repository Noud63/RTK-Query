import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { realEstatesApi } from "./src/slices/apiSlice";
import loginReducer from './src/features/loginSlice.js'

export const store = configureStore({
    reducer: {
        login: loginReducer,
        [realEstatesApi.reducerPath]: realEstatesApi.reducer
    },

 middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(realEstatesApi.middleware),
})

setupListeners(store.dispatch)
console.log(store.getState())
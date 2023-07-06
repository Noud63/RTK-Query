import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { realEstatesApi } from "./src/slices/apiSlice";

export const store = configureStore({
    reducer: {
        [realEstatesApi.reducerPath]: realEstatesApi.reducer
    },

 middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(realEstatesApi.middleware),
})

setupListeners(store.dispatch)
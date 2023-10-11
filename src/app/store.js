import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/user/userSlice"
import productReducer from "../feature/products/productSlice"




export const store = configureStore({
    reducer:{
        auth:authReducer,
        product:productReducer,
    },
});

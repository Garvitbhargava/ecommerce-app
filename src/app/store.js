import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/user/userSlice"
import productReducer from "../feature/products/productSlice"
import blogReducer from "../feature/blogs/blogSlice"
import contactReducer from "../feature/contact/contactSlice"




export const store = configureStore({
    reducer:{
        auth:authReducer,
        product:productReducer,
        blog:blogReducer,
        contact:contactReducer,
    },
});

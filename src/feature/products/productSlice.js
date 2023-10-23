import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast} from 'react-toastify'
import { productService } from "./productService";

export const getAllProducts = createAsyncThunk("product/get", async (data,thunkAPI) => {
    try {
        return await productService.getProducts(data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const getAProduct = createAsyncThunk("product/getAProduct", async (id,thunkAPI) => {
    try {
        return await productService.getSingleProduct(id);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})
export const addToWishlist = createAsyncThunk("product/wishlist", async (prodId,thunkAPI) => {
    try {
        const data =  await productService.addToWishlist(prodId);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})


export const addRating = createAsyncThunk("product/rating", async (data,thunkAPI) => {
    try {
       return await productService.rateProduct(data)
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})


const productState ={
    product: "",
    isError: false, // Updated to a boolean
    isSuccess: false, // Updated to a boolean
    isLoading: false, // Updated to a boolean
    message: "",
};



export const productSlice = createSlice({
    name: "product",
    initialState: productState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllProducts.pending, (state) => {
            state.isLoading= true;
        })
        .addCase(getAllProducts.fulfilled, (state,action) =>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.product = action.payload;
        })
        .addCase(getAllProducts.rejected, (state,action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error.message;
        })
        .addCase(addToWishlist.pending, (state) => {
            state.isLoading= true;
        })
        .addCase(addToWishlist.fulfilled, (state,action) =>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.addToWishlist = action.payload;
            state.message ="Product Added To Wishlist !"
        })
        .addCase(addToWishlist.rejected, (state,action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error.message;
        })
        
        .addCase(getAProduct.pending, (state) => {
            state.isLoading= true;
        })
        .addCase(getAProduct.fulfilled, (state,action) =>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.singleProduct = action.payload;
            state.message ="Product Feteched Successfully !"
        })
        .addCase(getAProduct.rejected, (state,action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error.message;
        })

        .addCase(addRating.pending, (state) => {
            state.isLoading= true;
        })
        .addCase(addRating.fulfilled, (state,action) =>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.rating = action.payload;
            state.message ="Rating Added Successfully !"
            if(state.isSuccess){
                toast.success("Rating Added Successfully")
            }
        })
        .addCase(addRating.rejected, (state,action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error.message;
        })
        ;
    }
})

export default productSlice.reducer;

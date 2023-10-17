import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast} from 'react-toastify'
import { blogService } from "./blogService";

export const getAllBlogs = createAsyncThunk("blogs/get", async (thunkAPI) => {
    try {
        return await blogService.getBlogs();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})
export const getABlog = createAsyncThunk("blogs/getOne", async (id,thunkAPI) => {
    try {
        return await blogService.getBlog(id);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})


const blogState ={
    blog: "",
    isError: false, // Updated to a boolean
    isSuccess: false, // Updated to a boolean
    isLoading: false, // Updated to a boolean
    message: "",
};



export const blogSlice = createSlice({
    name: "blog",
    initialState: blogState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllBlogs.pending, (state) => {
            state.isLoading= true;
        })
        .addCase(getAllBlogs.fulfilled, (state,action) =>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.blog = action.payload;
        })
        .addCase(getAllBlogs.rejected, (state,action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error.message;
        })
        .addCase(getABlog.pending, (state) => {
            state.isLoading= true;
        })
        .addCase(getABlog.fulfilled, (state,action) =>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.singleBlog = action.payload;
        })
        .addCase(getABlog.rejected, (state,action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error.message;
        })
        ;
    }
})

export default blogSlice.reducer;

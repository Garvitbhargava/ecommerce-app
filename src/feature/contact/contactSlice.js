import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast} from 'react-toastify'
import { contactService } from "./contactService";

export const createQuery = createAsyncThunk("contact/post", async (contactData,thunkAPI) => {
    try {
        return await contactService.postQuery(contactData);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})


const contactState ={
    contact: "",
    isError: false, // Updated to a boolean
    isSuccess: false, // Updated to a boolean
    isLoading: false, // Updated to a boolean
    message: "",
};



export const contactSlice = createSlice({
    name: "contact",
    initialState: contactState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(createQuery.pending, (state) => {
            state.isLoading= true;
        })
        .addCase(createQuery.fulfilled, (state,action) =>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.contact = action.payload;
            if(state.isSuccess === true){
                toast.success("Contact Form Submitted SuccessFully")
            }
        })
        .addCase(createQuery.rejected, (state,action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error.message;
            if(state.isError === true){
                toast.success("something Went Wrong")
            }
        })
        ;
    }
})

export default contactSlice.reducer;

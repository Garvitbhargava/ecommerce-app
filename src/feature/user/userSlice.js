import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast} from 'react-toastify'

export const registerUser = createAsyncThunk("auth/register", async (userData, thunkAPI) => {
    try {
        return await authService.register(userData);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})
export const loginUser = createAsyncThunk("auth/login", async (userData, thunkAPI) => {
    try {
        return await authService.login(userData);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})
export const getUserProductWishlist = createAsyncThunk("user/wishlist", async (thunkAPI) => {
    try{
return await authService.getUserWishlist();
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
})

const getCustomerfromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

const initialState = {
    user: getCustomerfromLocalStorage,
    isError: false, // Updated to a boolean
    isSuccess: false, // Updated to a boolean
    isLoading: false, // Updated to a boolean
    message: "",
}

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(registerUser.pending, (state) => {
            state.isLoading = true;
        }).addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.createdUser = action.payload;
            if (state.isSuccess === true) {
                toast.info("User Created Successfully");
            }
        }).addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error.message || "An error occurred"; // Handle error messages
            if (state.isError === true) {
                toast.error(state.message);
            }
        })
        .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
        }).addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.user = action.payload;
            if (state.isSuccess === true) {
                localStorage.setItem("token",action.payload.token);
                toast.info("User logged in Successfully");
            }
        }).addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error.message || "An error occurred"; // Handle error messages
            if (state.isError === true) {
                toast.error(state.message);
            }
        })
        .addCase(getUserProductWishlist.pending, (state) => {
            state.isLoading =true;
        }).addCase(getUserProductWishlist.fulfilled, (state,action) => {
            state.isLoading= false;
            state.isError= false;
            state.isSuccess= true;
            state.wishlist = action.payload;
        })
        .addCase(getUserProductWishlist.rejected, (state,action) => {
            state.isLoading=false;
            state.isError= true;
            state.isSuccess= false;
            state.message = action.error;
        })
        ;
    }
})

export default authSlice.reducer;

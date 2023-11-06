import { createSlice, createAsyncThunk,createAction } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast} from 'react-toastify';


export const myAsyncThunk = createAsyncThunk(
    'mySlice/myAsyncThunk',
    async (payload, { rejectWithValue }) => {
      try {
        // Your API request logic here
        const response = await authService(payload);
        return response.data;
      } catch (error) {
        return rejectWithValue({
          message: error.message,
          // Additional error information can be included here
        });
      }
    }
  );

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
    }catch(error){
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
export const addProdToCart = createAsyncThunk("user/cart/add", async (cartData,thunkAPI) => {
    try{
return await authService.addToCart(cartData);
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
})


  export const getUserCart = createAsyncThunk(
    'user/cart/get',
    async(data,thunkAPI) => {
      try{
        return await authService.getCart(data);
      }catch (error) {
        return thunkAPI.rejectWithValue(error)
      }
    }
  );
  export const deleteUserCart = createAsyncThunk(
    'user/cart/delete',
    async(data,thunkAPI) => {
      try{
        return await authService.emptyCart(data);
      }catch (error) {
        return thunkAPI.rejectWithValue(error)
      }
    }
  );

  export const getOrders = createAsyncThunk(
    'user/order/get',
    async (_, { rejectWithValue }) => {
      try {
        return await authService.getUserOrders();

      } catch (error) {
        return rejectWithValue({
          message: error.message, // Include the error message
        });
      }
    }
  );
  export const deleteCartProduct = createAsyncThunk(
    'user/cart/product/delete',
    async (data,thunkAPI) => {
      try {
        return await authService.removeProductFromCart(data);

      } catch (error) {
       
        return thunkAPI.rejectWithValue(error);
      }
    }
  );
  export const updateCartProduct = createAsyncThunk(
    'user/cart/product/update',
    async (data,thunkAPI) => {
      try {
        return await authService.updateProductFromCart(data);

      } catch (error) {
       
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const updateProfile = createAsyncThunk(
    'user/profile/update',
    async (data,thunkAPI) => {
      try {
        return await authService.updateUser(data);

      } catch (error) {
       
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const forgotPasswordToken = createAsyncThunk(
    'user/password/token',
    async (data,thunkAPI) => {
      try {
        return await authService.forgotPassToken(data);

      } catch (error) {
       
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const resetPassword = createAsyncThunk(
    'user/password/reset',
    async (data,thunkAPI) => {
      try {
        return await authService.resertPass(data);

      } catch (error) {
       
        return thunkAPI.rejectWithValue(error);
      }
    }
  );


  export const createAnOrder = createAsyncThunk(
    'user/cart/create-order',
    async (orderDetail,thunkAPI) => {
      try {
        return await authService.createOrder(orderDetail);

      } catch (error) {
       
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const resetState = createAction("Reset_all");

const getCustomerfromLocalStorage = localStorage.getItem("customer")

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
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error.message || "An error occurred"; // Handle error messages
            console.error("API request failed:", action.error);
        })
        .addCase(addProdToCart.pending, (state) => {
            state.isLoading=true;
        }).addCase(addProdToCart.fulfilled, (state,action) => {
            state.isLoading= false;
            state.isError= false;
            state.isSuccess= true;
            state.cartProduct = action.payload;
           if(state.isSuccess){
            toast.success("Product Added to Cart")
           }
        }).addCase(addProdToCart.rejected, (state,action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error.message || "An error occurred"; // Handle error messages
            console.error("API request failed:", action.error);
        })
        .addCase(getUserCart.pending, (state) => {
            state.isLoading=true;
        }).addCase(getUserCart.fulfilled, (state,action) => {
            state.isLoading= false;
            state.isError= false;
            state.isSuccess= true;
            state.cartProducts = action.payload;
        
        }).addCase(getUserCart.rejected, (state,action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error.message || "An error occurred"; // Handle error messages
            console.error("API request failed:", action.error);
        })
        .addCase(deleteCartProduct.pending, (state) => {
            state.isLoading=true;
        }).addCase(deleteCartProduct.fulfilled, (state,action) => {
            state.isLoading= false;
            state.isError= false;
            state.isSuccess= true;
            state.deletedCartProduct = action.payload;
            if(state.isSuccess){
                toast.success("Product Deleted From Cart Successfully !")
            }
        
        }).addCase(deleteCartProduct.rejected, (state,action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if(state.isSuccess === false){
                toast.error("Something Went Wrong!")
            }
            
        })
        .addCase(updateCartProduct.pending, (state) => {
            state.isLoading=true;
        }).addCase(updateCartProduct.fulfilled, (state,action) => {
            state.isLoading= false;
            state.isError= false;
            state.isSuccess= true;
            state.updatedCartProduct = action.payload;
            if(state.isSuccess){
                toast.success("Product updated From Cart Successfully !")
            }
        
        }).addCase(updateCartProduct.rejected, (state,action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if(state.isSuccess === false){
                toast.error("Something Went Wrong!")
            }
            
        })
        .addCase(createAnOrder.pending, (state) => {
            state.isLoading=true;
        }).addCase(createAnOrder.fulfilled, (state,action) => {
            state.isLoading= false;
            state.isError= false;
            state.isSuccess= true;
            state.orderedProduct = action.payload;
            if(state.isSuccess){
                toast.success("Ordered Created Successfully !")
            }
        
        }).addCase(createAnOrder.rejected, (state,action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if(state.isSuccess === false){
                toast.error("Something Went Wrong!")
            }
            
        })
        .addCase(getOrders.pending, (state) => {
          state.isLoading=true;
      }).addCase(getOrders.fulfilled, (state,action) => {
          state.isLoading= false;
          state.isError= false;
          state.isSuccess= true;
          state.getorderedProduct = action.payload;
        
      
      }).addCase(getOrders.rejected, (state,action) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
          if(state.isSuccess === false){
              toast.error("Something Went Wrong!")
          }
          
      })

      .addCase(updateProfile.pending, (state) => {
        state.isLoading=true;
    }).addCase(updateProfile.fulfilled, (state,action) => {
        state.isLoading= false;
        state.isError= false;
        state.isSuccess= true;
        state.updatedUser = action.payload;
          let currentUserData = localStorage.getItem("token")
          let newUserData ={
            _id: currentUserData?._id,
            token:currentUserData?.token,
            firstname:action?.payload?.firstname,
            lastname:action?.payload?.lastname,
            email:action?.payload?.email,
            mobile:action?.payload?.mobile,
          }
          localStorage.setItem("token,",JSON.stringify(newUserData))
          state.user = newUserData
            toast.success(" User Profile Updated  Successfully !")
        
    
    }).addCase(updateProfile.rejected, (state,action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if(state.isSuccess === false){
            toast.error("Something Went Wrong!")
        }
        
    })


    .addCase(forgotPasswordToken.pending, (state) => {
      state.isLoading=true;
  }).addCase(forgotPasswordToken.fulfilled, (state,action) => {
      state.isLoading= false;
      state.isError= false;
      state.isSuccess= true;
      state.token = action.payload;
      if(state.isSuccess){
          toast.success("Forgot password  Email Send Successfully !")
      }
  
  }).addCase(forgotPasswordToken.rejected, (state,action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.message = action.error;
      if(state.isSuccess === false){
          toast.error("Something Went Wrong!")
      }
      
  })

  .addCase(resetPassword.pending, (state) => {
    state.isLoading=true;
}).addCase(resetPassword.fulfilled, (state,action) => {
    state.isLoading= false;
    state.isError= false;
    state.isSuccess= true;
    state.pass = action.payload;
    if(state.isSuccess){
        toast.success("Password Updated Successfully !")
    }

}).addCase(resetPassword.rejected, (state,action) => {
    state.isLoading = false;
    state.isError = true;
    state.isSuccess = false;
    state.message = action.error;
    if(state.isSuccess === false){
        toast.error("Something Went Wrong!")
    }
    
})

.addCase(deleteUserCart.pending, (state) => {
  state.isLoading=true;
}).addCase(deleteUserCart.fulfilled, (state,action) => {
  state.isLoading= false;
  state.isError= false;
  state.isSuccess= true;
  state.deletedCart = action.payload;

}).addCase(deleteUserCart.rejected, (state,action) => {
  state.isLoading = false;
  state.isError = true;
  state.isSuccess = false;
  state.message = action.error;
})
.addCase(resetState, () => initialState);
        
    }
})

export default authSlice.reducer;

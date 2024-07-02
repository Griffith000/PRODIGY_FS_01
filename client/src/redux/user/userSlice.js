import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loading: false,
    error: false,
};

const userSlice= createSlice({
    name: "user",
    initialState,
    reducers:{
        signInStart(state){
           state.loading = true;
        },
        signInSuccess(state , action) {
            state.user = action.payload;
            state.loading = false;
            state.error = false;
        },
        signInFail(state,action){
            state.error = action.payload;
            state.loading = false;
        },
        updateUserStart(state){
            state.loading = true;
        },
        updateUserSuccess(state,action){
            state.user = action.payload;
            state.loading = false;
            state.error = false;
        },
        updateUserFail(state,action){
            state.error = action.payload;
            state.loading = false;
        }
        
    }});

const userReducer = userSlice.reducer;
export const { signInStart, signInSuccess, signInFail,updateUserStart,updateUserSuccess,updateUserFail } = userSlice.actions;
export default userReducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loading: false,
    error: false,
};

const userSlice= createSlice({
    initialState,
    name: "user",
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
        }
    }});

const userReducer = userSlice.reducer;
export const { signInStart, signInSuccess, signInFail } = userSlice.actions;
export default userReducer;
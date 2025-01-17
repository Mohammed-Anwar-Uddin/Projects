import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    info:null
}

export const counterSlice = createSlice({
    name:"movie",
    initialState,
    reducers:{
        loadmovie:(state,action) =>{
            state.info = action.payload
        },
        removemovie:(state, action) =>{
            state.info = action.payload
        }
    }
})

export const {loadmovie, removemovie} = counterSlice.reducer

export default counterSlice.reducer
import { createSlice } from "@reduxjs/toolkit";
const initialState={
    value:0
}

const Myslice = createSlice({
name:"todo",
initialState,

reducers:{

    getTodoCount:(state,action)=>{
        state.value=action.payload
    }
}

})

export const {getTodoCount} = Myslice.actions;
export default Myslice.reducer
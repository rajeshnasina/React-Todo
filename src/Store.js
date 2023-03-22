import { configureStore } from "@reduxjs/toolkit";
import Myslice from './Reducers/MyReducer'


export const Store=configureStore({

    reducer:{
        MyTodosCount:Myslice
    }
}

  
)


// import { configureStore } from "@reduxjs/toolkit";
// import { Myslice } from "./Reducers/MyReducer";

// export const Store = configureStore({
//     reducer:{
//         MyTodosCount:Myslice
//     }
// })
import { configureStore } from "@reduxjs/toolkit";
import statReducer from "./statSlice";
const Store = configureStore({
    reducer:{
        stat : statReducer
    }
})

export default Store;
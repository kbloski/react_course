import { configureStore } from "@reduxjs/toolkit";

import { counterSlice } from "./counterSlice"
import { postApi } from "./postApiRtkQuery";

const store = configureStore({
    reducer: {
        // redux slice
        counter: counterSlice.reducer,

        // rtk query
        [postApi.reducerPath]: postApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat( postApi.middleware)
});



export default store;

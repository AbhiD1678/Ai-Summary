import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article";
// Configuring store,store is a global state but in most cases we dont need the entire state,we only need to reduce it to articleapi
export const store=configureStore({
    reducer:{
        [articleApi.reducerPath]:articleApi.reducer
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(articleApi.middleware)
})

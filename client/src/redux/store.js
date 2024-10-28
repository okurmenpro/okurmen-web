// store.js

import { configureStore } from "@reduxjs/toolkit";
import PostProductReducer from "./PostProduct/PostProduct";
import { userDataReducer } from "./auth/UserSlice";

const store = configureStore({
  reducer: {
    post_product: PostProductReducer,
    userDataReducer,
  },
});

export default store;

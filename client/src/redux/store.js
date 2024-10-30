// store.js

import { configureStore } from "@reduxjs/toolkit";
import PostProductReducer from "./PostProduct/PostProduct";
import { userDataReducer } from "./auth/UserSlice";
import { profileReducer } from "./auth/ProfileSlice";

const store = configureStore({
  reducer: {
    post_product: PostProductReducer,
    userDataReducer,
    profileReducer,
  },
});

export default store;

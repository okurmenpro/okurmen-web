// store.js

import { configureStore } from "@reduxjs/toolkit";
import PostProductReducer from "./PostProduct/PostProduct";
import { userDataReducer } from "./auth/UserSlice";
import { profileReducer } from "./auth/ProfileSlice";
import { groupStudentsReducer } from "./students/GroupStudents";

const store = configureStore({
  reducer: {
    post_product: PostProductReducer,
    userDataReducer,
    profileReducer,
    groupStudentsReducer,
  },
});

export default store;

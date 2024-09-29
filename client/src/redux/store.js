// store.js

import { configureStore } from "@reduxjs/toolkit";
import PostProductReducer from "./PostProduct/PostProduct";

const store = configureStore({
	reducer: {
		post_product: PostProductReducer,
	},
});

export default store;

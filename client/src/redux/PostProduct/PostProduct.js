// PostProduct.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const submitProduct = createAsyncThunk(
	'post_product/submitProduct',
	async (localData, { rejectWithValue }) => {
		try {
			const res = await axios.post("http://localhost:8000/namenumber/", localData);
			return res.data;
		} catch (error) {
			if (error.response) {
				return rejectWithValue(error.response.data);
			} else if (error.request) {
				return rejectWithValue("No response received from server.");
			} else {
				return rejectWithValue(error.message);
			}
		}
	}
);

const PostProduct = createSlice({
	name: "post_product",
	initialState: { data: { name: "", number: "" }, status: 'idle', error: null },
	reducers: {
		setProduct: (state, action) => {
			state.data = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(submitProduct.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(submitProduct.fulfilled, (state, action) => {
				state.status = 'succeeded';
			})
			.addCase(submitProduct.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload;
			});
	}
});

export const { setProduct } = PostProduct.actions;
export default PostProduct.reducer;

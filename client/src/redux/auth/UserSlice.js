import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BACK_URL = import.meta.env.BACK_URL


export const registrationSlice = createAsyncThunk(
  "auth/registration",
  async (data, { rejectWithValue }) => {
    console.log(data);

    try {
      const response = await axios.post(
        `${BACK_URL}/68d1c772f464b48b0399a4c987705058/auth`,
        data
      );
      return response.data;
    } catch (e) {
      console.error(e);
      return rejectWithValue(e.response?.data || e.message);
    }
  }
);

export const confirmUserSlice = createAsyncThunk(
  "auth/confirmUser",
  async (data) => {
    try {
      const response = await axios.post(
        `${BACK_URL}/a58743c73d728f7cbf0526acb8d9aff3/confirmUser`,
        data
      );
      return response.data;
    } catch (e) {
      console.error(e);
    }
  }
);

const UserSlice = createSlice({
  name: "user",
  initialState: {
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(registrationSlice.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(registrationSlice.fulfilled, (state) => {
      state.status = "success";
    });
    builder.addCase(registrationSlice.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });

    builder.addCase(confirmUserSlice.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(confirmUserSlice.fulfilled, (state) => {
      state.status = "success";
    });
    builder.addCase(confirmUserSlice.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
  },
});

export const userDataReducer = UserSlice.reducer;

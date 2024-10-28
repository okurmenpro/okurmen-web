import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const registrationSlice = createAsyncThunk(
  "auth/registration",
  async (data, { rejectWithValue }) => {
    console.log(data);

    try {
      const response = await axios.post(
        "https://api.elchocrud.pro/api/v1/68d1c772f464b48b0399a4c987705058/auth",
        data
      );
      return response.data;
    } catch (e) {
      console.error(e);
      return rejectWithValue(e.response?.data || e.message);
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
      state.status = "succeeded";
    });
    builder.addCase(registrationSlice.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
  },
});

export const userDataReducer = UserSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BACK_URL = import.meta.env.BACK_URL;

export const managerGetProfile = createAsyncThunk(
  "manager/getProfile",
  async () => {
    try {
      const response = await axios.get(
        `${BACK_URL}/8914798a42dd410e4b3878dc5599d264/managerProfile/`
      );
      return response.data.json();
    } catch (error) {
      console.error(error);
    }
  }
);


const ProfileSlice = createSlice({
  name: "profile",
  initialState: {
    status:'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(managerGetProfile.pending, (state) => {
      state.status = "loading";
    })
    builder.addCase(managerGetProfile.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });
    builder.addCase(managerGetProfile.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
  },
})


export const profileReducer = ProfileSlice.reducer
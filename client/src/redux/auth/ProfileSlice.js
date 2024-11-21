import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BACK_URL = import.meta.env.VITE_BACKEND_URL;

export const managerGetProfile = createAsyncThunk(
  "manager/getProfile",
  async () => {
    try {
      const response = await axios.get(
        `${BACK_URL}/8914798a42dd410e4b3878dc5599d264/managerProfile`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getProfile = createAsyncThunk("profile/getProfile", async () => {
  try {
    const response = await axios.get(
      `${BACK_URL}/9682478393bcc8b02658a359da2c5424/create-profile/1`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

export const createProfile = createAsyncThunk(
  "profile/createProfile",
  async (newData) => {
    try {
      const response = await axios.patch(
        `${BACK_URL}/9682478393bcc8b02658a359da2c5424/create-profile/1`,
        newData
      );
      if (response.status === 200) {
        getProfile();
      }

      return getProfile();
    } catch (error) {
      console.error(error);
    }
  }
);

const ProfileSlice = createSlice({
  name: "profile",
  initialState: {
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(managerGetProfile.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(managerGetProfile.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });
    builder.addCase(managerGetProfile.rejected, (state) => {
      state.status = "failed";
    });
    builder.addCase(getProfile.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });
    builder.addCase(getProfile.rejected, (state) => {
      state.status = "failed";
    });
    builder.addCase(createProfile.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(createProfile.fulfilled, (state) => {
      state.status = "success";
    });
    builder.addCase(createProfile.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const profileReducer = ProfileSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BACK_URL = import.meta.env.VITE_BACKEND_URL;

export const groupStudentsSlice = createAsyncThunk(
  "groupStudents/getGroupStudents",
  async () => {
    try {
      const response = await axios.get(
        `${BACK_URL}/f1cb9e3720ff68a3701fa0bf7421e715/students`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

const GroupStudents = createSlice({
  name: "groupStudents",
  initialState: {
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(groupStudentsSlice.pending, (state) => {
        state.status = "loading";
      })
      .addCase(groupStudentsSlice.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(groupStudentsSlice.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const groupStudentsReducer = GroupStudents.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";

export const fetchcourseAdd = createAsyncThunk(
  "courseadd",
  async ({payload},{ rejectWithValue }) => {
    try {
      const response = await api.actionHandler({
        url: api.courseAddURL,
        method: "POST",
        data : payload,
      });

      let data = await response;
      if (response.status === 201) {
        return data;
      } else {
        return rejectWithValue(data);
      }
    } catch (e) {
      const message =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return rejectWithValue(message);
    }
  }
);

const courseAddSlice = createSlice({
  name: "courseadd",
  initialState: {
    courseaddFetching: false,
    courseaddSuccess: false,
    courseaddError: false,
    courseaddErrorMessage: "",
  },
  reducers: {
    clearCourseAddState: (state) => {
      state.courseaddError = false;
      state.courseaddSuccess = false;
      state.courseaddFetching = false;

      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchcourseAdd.fulfilled, (state) => {
        state.courseaddFetching = false;
        state.courseaddSuccess = true;
      })
      .addCase(fetchcourseAdd.rejected, (state, action) => {
        state.courseaddFetching = false;
        state.courseaddError = true;
        state.courseaddErrorMessage = action?.payload?.data?.message?.title[0];
      })
      .addCase(fetchcourseAdd.pending, (state) => {
        state.courseaddFetching = true;
      });
  },
});

export const { clearCourseAddState } = courseAddSlice.actions;

export default courseAddSlice.reducer;

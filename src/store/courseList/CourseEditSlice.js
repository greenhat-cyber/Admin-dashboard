import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";

export const fetchcourseEdit = createAsyncThunk(
  "courseEdit",
  async ({payload,courseID},{ rejectWithValue }) => {
    try {
      const response = await api.actionHandler({
        url: api.courseEditURL.replace("{id}",courseID),
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

const courseEditSlice = createSlice({
  name: "courseEdit",
  initialState: {
    courseEditFetching: false,
    courseEditSuccess: false,
    courseEditError: false,
    courseEditErrorMessage: "",
  },
  reducers: {
    clearCourseEditState: (state) => {
      state.courseEditError = false;
      state.courseEditSuccess = false;
      state.courseEditFetching = false;

      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchcourseEdit.fulfilled, (state) => {
        state.courseEditFetching = false;
        state.courseEditSuccess = true;
      })
      .addCase(fetchcourseEdit.rejected, (state, action) => {
        state.courseEditFetching = false;
        state.courseEditError = true;
        state.courseEditErrorMessage = action?.payload?.data?.message?.title[0];
      })
      .addCase(fetchcourseEdit.pending, (state) => {
        state.courseEditFetching = true;
      });
  },
});

export const { clearCourseEditState } = courseEditSlice.actions;

export default courseEditSlice.reducer;

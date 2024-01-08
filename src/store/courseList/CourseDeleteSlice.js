import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";

export const fetchcourseDelete = createAsyncThunk(
  "courseDelete",
  async ({courseID},{ rejectWithValue }) => {
    try {
      const response = await api.actionHandler({
        url: api.courseDeleteURL.replace("{id}", courseID),
        method: "DELETE",
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

const courseDeleteSlice = createSlice({
  name: "courseDelete",
  initialState: {
    courseDeleteFetching: false,
    courseDeleteSuccess: false,
    courseDeleteError: false,
    courseDeleteErrorMessage: "",
  },
  reducers: {
    clearCourseDeleteState: (state) => {
      state.courseDeleteError = false;
      state.courseDeleteSuccess = false;
      state.courseDeleteFetching = false;

      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchcourseDelete.fulfilled, (state) => {
        state.courseDeleteFetching = false;
        state.courseDeleteSuccess = true;
      })
      .addCase(fetchcourseDelete.rejected, (state, action) => {
        state.courseDeleteFetching = false;
        state.courseDeleteError = true;
        state.courseDeleteErrorMessage = action?.payload;
      })
      .addCase(fetchcourseDelete.pending, (state) => {
        state.courseDeleteFetching = true;
      });
  },
});

export const { clearCourseDeleteState,deleteSuccess } = courseDeleteSlice.actions;

export default courseDeleteSlice.reducer;

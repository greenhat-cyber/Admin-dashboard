import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";

export const fetchcourseList = createAsyncThunk(
  "courselist",
  async (payload,{ rejectWithValue }) => {
    try {
      const response = await api.actionHandler({
        url: api.courseListURL,
        method: "GET",
      });

      let data = await response;
      if (response.status === 200) {
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

const courseListSlice = createSlice({
  name: "courselist",
  initialState: {
    courselist: [],
    courselistFetching: false,
    courselistSuccess: false,
    courselistError: false,
    courselistErrorMessage: "",
  },
  reducers: {
    clearCourseListState: (state) => {
      state.courselistError = false;
      state.courselistSuccess = false;
      state.courselistFetching = false;

      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchcourseList.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.courselist =[]
        payload.data.data.forEach(items => state.courselist.push(items));
        state.courselistFetching = false;
        state.courselistSuccess = true;
      })
      .addCase(fetchcourseList.rejected, (state, action) => {
        state.courselistFetching = false;
        state.courselistError = true;
        state.courselistErrorMessage = action?.payload;
      })
      .addCase(fetchcourseList.pending, (state) => {
        state.courselistFetching = true;
      });
  },
});

export const { clearCourseListState } = courseListSlice.actions;

export default courseListSlice.reducer;

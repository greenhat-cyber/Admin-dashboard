import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ phone, password }, { rejectWithValue }) => {
    try {
      const response = await api.actionHandler({
        url: api.loginURL,
        method: "POST",
        data: {
          phone,
          password,
        },
      });

      let data = await response;
      if (response.status === 200) {
        localStorage.setItem("admin-token", response.data.data.token.access);
        localStorage.setItem("user-role", response.data.data.user.user_type);
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

const userSlice = createSlice({
  name: "user/login",
  initialState: {
    loginFetching: false,
    loginSuccess: false,
    loginError: false,
    loginErrorMessage: "",
  },
  reducers: {
    clearLoginState: (state) => {
      state.loginError = false;
      state.loginSuccess = false;
      state.loginFetching = false;

      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.loginFetching = false;
        state.loginSuccess = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loginFetching = false;
        state.loginError = true;
        state.loginErrorMessage = action?.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loginFetching = true;
      });
  },
});

export const { clearLoginState } = userSlice.actions;

export default userSlice.reducer;

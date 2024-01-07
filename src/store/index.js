import { configureStore } from "@reduxjs/toolkit";

//Login
import userSlice from "./login/LoginSlice";

export const store = configureStore({
    reducer: {
        userSlice,
    }
})
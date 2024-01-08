import { configureStore } from "@reduxjs/toolkit";

//Login
import userSlice from "./login/LoginSlice";
// courseList
import courseListSlice from "./courseList/CourseListSlice";
import courseAddSlice from "./courseList/CourseAddSlice";
import courseDeleteSlice from "./courseList/CourseDeleteSlice";

export const store = configureStore({
    reducer: {
        userSlice,
        courseListSlice,
        courseAddSlice,
        courseDeleteSlice,
    }
})
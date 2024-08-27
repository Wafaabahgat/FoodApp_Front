import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearErrors, userCourses } from "./coursesAction";
import { CourseType } from "../../lib/types";

interface State {
  loading: boolean | null;
  success: boolean | null;
  msg: string;
  errors: Record<string, any>;
  data: CourseType[]|null;
}

const initialState: State = {
  loading: null,
  success: null,
  msg: "",
  errors: {},
  data: null,
};

const UserCoursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // *********** Login ********** //
      .addCase(userCourses.pending, (state: State) => {
        state.loading = true;
        state.msg = "";
        state.errors = {};
        state.data = [];
        state.success = null;
      })
      .addCase(userCourses.fulfilled, (state: State, action: PayloadAction<{ success: boolean; msg: string; data: CourseType[] }>) => {
        state.loading = false;
        state.success = action.payload.success;
        state.msg = action.payload.msg;
        state.data = action.payload.data;
        state.errors = {};
      })
      .addCase(userCourses.rejected, (state: State, action: PayloadAction<{ msg: string; errors: Record<string, any> }>) => {
        state.loading = false;
        state.success = false;
        state.msg = action.payload?.msg;
        state.errors = action.payload?.errors;
      })
      .addCase(clearErrors.fulfilled, (state: State) => {
        state.loading = false;
        state.success = null;
        state.msg = "";
        state.errors = {};
      });
  },
});

export default UserCoursesSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearErrors, applyCourses } from "./coursesAction";
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

const CoursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // *********** Login ********** //
      .addCase(applyCourses.pending, (state: State) => {
        state.loading = true;
        state.msg = "";
        state.errors = {};
        state.data = [];
        state.success = null;
      })
      .addCase(applyCourses.fulfilled, (state: State, action: PayloadAction<{ success: boolean; msg: string; data: CourseType[] }>) => {
        state.loading = false;
        state.success = action.payload.success;
        state.msg = action.payload.msg;
        state.data = action.payload.data;
        state.errors = {};
      })
      .addCase(applyCourses.rejected, (state: State, action: PayloadAction<{ msg: string; errors: Record<string, any> }>) => {
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

export default CoursesSlice.reducer;

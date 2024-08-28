import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearErrors, dishesSlice } from "./DishesAction";
import { Slice, DishType } from "../../lib/types";

const initialState: Slice<DishType[]> = {
  loading: null,
  success: null,
  msg: "",
  errors: {},
  data: [],
};

const DishesSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(dishesSlice.pending, (state: Slice<DishType[]>) => {
        state.loading = true;
        state.msg = "";
        state.data = [];
        state.errors = {};
        state.success = null;
      })
      .addCase(
        dishesSlice.fulfilled,
        (state: Slice<DishType[]>, action: PayloadAction<Slice<DishType[]>>) => {
          state.loading = false;
          state.success = action.payload.success;
          state.msg = action.payload.msg;
          state.data = action.payload.data;
          state.errors = {};
        }
      )
      .addCase(
        dishesSlice.rejected,
        (state: Slice<DishType[]>, action: PayloadAction<Slice<DishType[]>>) => {
          state.loading = false;
          state.success = false;
          state.msg = action.payload?.msg;
          state.errors = action.payload?.errors || action.payload;
        }
      )
      .addCase(clearErrors.fulfilled, (state: Slice<DishType[]>) => {
        state.loading = false;
        state.success = null;
        state.msg = "";
        state.errors = {};
      });
  },
});

export default DishesSlice.reducer;

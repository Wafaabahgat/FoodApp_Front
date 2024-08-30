import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearErrors, restaurantsSlice } from "./RestaurantsAction";
import { Slice, DishType } from "../../lib/types";

const initialState: Slice<DishType[]> = {
  loading: null,
  success: null,
  msg: "",
  errors: {},
  data: [],
};

const RestaurantsSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(restaurantsSlice.pending, (state: Slice<DishType[]>) => {
        state.loading = true;
        state.msg = "";
        state.data = [];
        state.errors = {};
        state.success = null;
      })
      .addCase(
        restaurantsSlice.fulfilled,
        (state: Slice<DishType[]>, action: PayloadAction<Slice<DishType[]>>) => {
          state.loading = false;
          state.success = action.payload.success;
          state.msg = action.payload.msg;
          state.data = action.payload.data;
          state.errors = {};
        }
      )
      .addCase(
        restaurantsSlice.rejected,
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

export default RestaurantsSlice.reducer;

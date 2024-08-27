import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
import { clearErrors, registerUser } from "./registerAction";
import { UserData } from "../../../lib/types";

const cookies = new Cookies();

interface LoginState {
  loading: boolean | null;
  success: boolean | null;
  msg: string;
  user: UserData | null;
  errors: Record<string, any>;
  data: UserData | null | [];
}

const initialState: LoginState = {
  loading: null,
  success: null,
  msg: "",
  user: null,
  errors: {},
  data: null,
};

const LoginAuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // *********** register ********** //
      .addCase(registerUser.pending, (state: LoginState) => {
        state.loading = true;
        state.msg = "";
        state.user = null;
        state.errors = {};
        state.success = null;
      })
      .addCase(
        registerUser.fulfilled,
        (
          state: LoginState,
          action: PayloadAction<{
            success: boolean;
            msg: string;
            data: UserData;
          }>
        ) => {
          state.loading = false;
          state.success = action.payload.success;
          state.msg = action.payload.msg;
          state.user = action.payload.data;
          state.errors = {};
          if (state.user?.email) {
            cookies.set("user", JSON.stringify(state.user), {
              path: "/",
              maxAge: 3600 * 24 * 10,
            });
          }
          if (state.token) {
            cookies.set("token", JSON.stringify(state.token), {
              path: "/",
              maxAge: 3600 * 24 * 10,
            });
          }
        }
      )
      .addCase(
        registerUser.rejected,
        (
          state: LoginState,
          action: PayloadAction<{ msg: string; errors: object }>
        ) => {
          state.loading = false;
          state.success = false;
          state.msg = action.payload?.msg;
          state.errors = action.payload?.errors;
        }
      )
      .addCase(clearErrors.fulfilled, (state: LoginState) => {
        state.loading = false;
        state.success = null;
        state.msg = "";
        state.errors = {};
      });
  },
});

export default LoginAuthSlice.reducer;

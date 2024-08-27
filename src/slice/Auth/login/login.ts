import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
import { clearErrors, loginUser } from "./loginAction";
import { UserData } from "../../../lib/types";

const cookies = new Cookies();

interface LoginState {
  loading: boolean | null;
  success: boolean | null;
  msg: string;
  user: UserData | null;
  errors: Record<string, any>;
  data: UserData | null | [];
  token: string | null; // إضافة خاصية التوكن
}

const initialState: LoginState = {
  loading: null,
  success: null,
  msg: "",
  user: null,
  errors: {},
  data: null,
  token: null, // تهيئة خاصية التوكن
};

const LoginAuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // *********** Login ********** //
      .addCase(loginUser.pending, (state: LoginState) => {
        state.loading = true;
        state.msg = "";
        state.user = null;
        state.errors = {};
        state.success = null;
        state.token = null; 
      })
      .addCase(
        loginUser.fulfilled,
        (
          state: LoginState,
          action: PayloadAction<{
            success: boolean;
            msg: string;
            data: {
              token: string; 
              user: UserData;
            };
          }>
        ) => {
          state.loading = false;
          state.success = action.payload.success;
          state.msg = action.payload.msg;
          state.user = action.payload.data.user; 
          state.token = action.payload.data.token;
          state.errors = {};

         
          if (state.token) {
            cookies.set("token", state.token, {
              path: "/",
              maxAge: 3600 * 24 * 10, 
            });
          }

          // تخزين معلومات المستخدم في الكوكيز
          if (state.user?.email) {
            cookies.set("user", JSON.stringify(state.user), {
              path: "/",
              maxAge: 3600 * 24 * 10, 
            });
          }
        }
      )
      .addCase(
        loginUser.rejected,
        (
          state: LoginState,
          action: PayloadAction<{ msg: string; errors: Record<string, any> }>
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

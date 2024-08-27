import { configureStore } from "@reduxjs/toolkit";

import login from "../slice/Auth/login/login";
import register from "../slice/Auth/register/register";
import Restaurant from "../slice/Restaurant/Restaurant";
import Carousels from "../slice/Carousels/Carousels";


export const store = configureStore({
  reducer: {
    //// Auth ////
    login,
    register,
    //// Courses ////

    Restaurant,
    Carousels,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

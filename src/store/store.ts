import { configureStore } from "@reduxjs/toolkit";

import login from "../slice/Auth/login/login";
import register from "../slice/Auth/register/register";
import Carousels from "../slice/Carousels/Carousels";
import Dishes from "../slice/Dishes/Dishes";
import singleDishes from "../slice/Dishes/singleDishes";

export const store = configureStore({
  reducer: {
    //// Auth ////
    login,
    register,

    //////////////
    Carousels,
    Dishes: Dishes,
    singleDishes,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

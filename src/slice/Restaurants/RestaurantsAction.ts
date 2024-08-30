import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const token = cookies.get("token");
const TOKEN = `Bearer ${token}`;
const config = {
  headers: {
    Authorization: TOKEN,
  },
};

//  *********** All *********** //
export const restaurantsSlice = createAsyncThunk(
  "restaurants/all",
  async (args:string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    console.log("restaurantsAaa");
    try {
      const { data } = await axios.get(`/restaurants`, config);
      console.log("restaurantsAll", data);
      return data;
    } catch (err) {
      if (err?.response?.data?.message === "Unauthenticated.") {
        console.log("restaurantsqq");
        return rejectWithValue(err?.response?.data?.message);
      }
      return rejectWithValue(err?.response?.data);
    }
  }
);

// *********** Single *********** //
export const singleRestaurant = createAsyncThunk(
  "restaurants/single",
  async (args: number, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      // تعديل الرابط ليستخدم id مباشرةً
      const { data } = await axios.get(`/restaurants/${args}`, config);
      console.log("restaurants", data);
      return data;
    } catch (err) {
      if (err?.response?.data?.message === "Unauthenticated.") {
        return rejectWithValue(err?.response?.data?.message);
      }

      return rejectWithValue(err?.response?.data);
    }
  }
);


export const clearErrors = createAsyncThunk("carousels/clear", async () => {
  return true;
});

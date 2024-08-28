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
export const dishesSlice = createAsyncThunk(
  "dishes/all",
  async (args:string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    console.log("dishesfff");
    try {
      const { data } = await axios.get(`/dishes`, config);
      console.log("dishes", data);
      return data;
    } catch (err) {
      if (err?.response?.data?.message === "Unauthenticated.") {
        console.log("dishesfff");
        return rejectWithValue(err?.response?.data?.message);
      }
      return rejectWithValue(err?.response?.data);
    }
  }
);

// *********** Single *********** //
export const singledish = createAsyncThunk(
  "dishes/single",
  async (args: number, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    console.log("dishesfff");

    try {
      const { data } = await axios.get(
        `/dishes?${args}`,
        config
      );
      console.log("dishes", data);
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

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";


const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

// *********** Supplier *********** //
export const loginUser = createAsyncThunk(
  "Auth/login",
  async (args: { email: string; password: string }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
      // console.log("jjjjjj");
    try {
      const { data } = await axios.post("/login", args);
      return data;
    } catch (err) {
      console.log(err);

      return rejectWithValue(err?.response?.data);
    }
  }
);

export const clearErrors = createAsyncThunk("login/clear", async () => {
  return true;
});

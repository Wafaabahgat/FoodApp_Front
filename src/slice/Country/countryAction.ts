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


// *********** Courses *********** //
export const allCountry = createAsyncThunk(
  "country/all",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get("/country", config);
      return data;
    } catch (err) {
      console.log(err);

      return rejectWithValue(err?.response?.data);
    }
  }
);

export const applyCourses = createAsyncThunk(
  "courses/applyCourses",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get(`/apply-courses/${id}`, config);
      return data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err?.response?.data || err.message);
    }
  }
);

export const userCourses = createAsyncThunk(
  "courses/userCourses",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get(`/user/courses`, config);
      return data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err?.response?.data || err.message);
    }
  }
);


export const courseBySlug = createAsyncThunk(
  "courses/single",
  async (slug: string | "", thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get("/courses/" + slug, config);
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

import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const getAlldata = createAsyncThunk("STADISTICS", async () => {
  try {
    const data = await axios.get("http://localhost:8000/api/search/chart");
    return data.data;
  } catch (error) {
    console.log(error);
  }
});

const staticReducer = createReducer([], {
  [getAlldata.fulfilled]: (state, action) => action.payload,
});

export default staticReducer;

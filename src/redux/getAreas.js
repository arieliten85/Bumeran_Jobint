import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchClient } from "../config";

export const getAreasRequest = createAsyncThunk("AREAS", async () => {
  try {
    const data = await axios.get("http://localhost:8000/api/area/all");
    return data.data;
  } catch (error) {
    console.log(error);
  }
});

const areaReducer = createReducer([], {
  [getAreasRequest.fulfilled]: (state, action) => action.payload,
});

export default areaReducer;

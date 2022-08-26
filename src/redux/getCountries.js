import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const getCountriesRequest = createAsyncThunk("COUNTRIES", async () => {
  try {
    const data = await axios.get("http://localhost:8000/api/country/all");
    return data.data;
  } catch (error) {
    console.log(error);
  }
});

const countryReducer = createReducer([], {
  [getCountriesRequest.fulfilled]: (state, action) => action.payload,
});

export default countryReducer;

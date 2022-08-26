import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const getAlldataTable = createAsyncThunk(
  "STADISTICS_TABLE",
  async () => {
    try {
      const data = await axios.get(
        "http://localhost:8000/api/search/chart/table"
      );
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const staticTableReducer = createReducer([], {
  [getAlldataTable.fulfilled]: (state, action) => action.payload,
});

export default staticTableReducer;

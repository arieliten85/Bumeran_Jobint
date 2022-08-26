import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const addAvtiveSearches = createAsyncThunk(
  "ADD_ACTIVE_SEARCHES",
  async (id) => {
    try {
      await axios.put(
        `http://localhost:8000/api/recruiter/${id}/activeSearchs?count=1`
      );
    } catch (error) {
      console.log(error);
    }
  }
);

export const subtractAvtiveSearches = createAsyncThunk(
  "SUBTRACT_ACTIVE_SEARCHES",
  async (id) => {
    try {
      await axios.put(
        `http://localhost:8000/api/recruiter/${id}/activeSearchs`
      );
    } catch (error) {
      console.log(error);
    }
  }
);

const activeSearchesReducer = createReducer([], {
  [addAvtiveSearches.fulfilled]: (state, action) => action.payload,
  [subtractAvtiveSearches.fulfilled]: (state, action) => action.payload,
});

export default activeSearchesReducer;

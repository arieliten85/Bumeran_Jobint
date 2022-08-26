import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const modifyRating = createAsyncThunk("MODIFY_RATING", async (id) => {
  try {
    await axios.put(`http://localhost:8000/api/recruiter/${id}/rating`);
  } catch (error) {
    console.log(error);
  }
});

const modifyRatingReducer = createReducer([], {
  [modifyRating.fulfilled]: (state, action) => action.payload,
});

export default modifyRatingReducer;

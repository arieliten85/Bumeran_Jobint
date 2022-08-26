import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const assignRecruiterToSearch = createAsyncThunk(
  "ASSIGN_RECRUITER",
  async ({ searchId, RecruiterId }) => {
    try {
      const { data } = await axios.put(
        `http://localhost:8000/api/search/${searchId}`,
        { RecruiterId }
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const assignRecruiterReducer = createReducer(
  {},
  {
    [assignRecruiterToSearch.fulfilled]: (state, action) => action.payload,
  }
);

export default assignRecruiterReducer;

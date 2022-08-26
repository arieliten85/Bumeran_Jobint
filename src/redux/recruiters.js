import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const sendAllRecruiters = createAsyncThunk(
  "RECRUITERS_ALL",
  async () => {
    try {
      const data = await axios.get("http://localhost:8000/api/recruiter/all");
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getOneRecruiter = createAsyncThunk("ONE_RECUITER", async (id) => {
  if (id === null) {
    try {
      console.log("entro null");
      const data = null;
      return data;
    } catch (error) {
      console.log(error);
    }
  } else if (id !== null) {
    try {
      const data = await axios.get(`http://localhost:8000/api/recruiter/${id}`);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
});

export const deleteRecruiter = createAsyncThunk(
  "RECRUITERS_DELETE",
  async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/recruiter/delete/${id}`);
    } catch (error) {
      console.log(error);
    }
  }
);

export const modifyRecruiter = createAsyncThunk(
  "RECRUITERS_MODIFY",
  async ({
    id,
    name,
    lastName,
    email,
    rating,
    description,
    selectedCountry,
    jobArea,
  }) => {
    console.log("RATING", parseInt(rating));
    try {
      console.log("RECRUTER NAME:", jobArea);
      const data = await axios.put(
        `http://localhost:8000/api/recruiter/edit/${id}`,
        {
          name: name?.value,
          lastName: lastName?.value,
          email: email?.value,
          rating: rating ? parseInt(rating) : undefined,
          description: description?.value,
          CountryId: selectedCountry ? Number(selectedCountry) : undefined,
          AreaId: jobArea ? Number(jobArea) : undefined,
        }
      );
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

/* export const updateActiveSearch = createAsyncThunk(
  "ACTIVESEARCH_MODIFY",
  async ({ updateRec }) => {
    try {
      // console.log("RECRUTER ID:",id)
      await axios.put(
        `http://localhost:8000/api/recruiter/${updateRec}/activeSearchs?count=1`
      );
    
    } catch (error) {
      console.log(error);
    }
  }
); */

const recruiterReducer = createReducer([], {
  [sendAllRecruiters.fulfilled]: (state, action) => action.payload,
  [getOneRecruiter.fulfilled]: (state, action) => action.payload,
  [deleteRecruiter.fulfilled]: (state, action) => action.payload,
  [modifyRecruiter.fulfilled]: (state, action) => action.payload,
  //[updateActiveSearch.fulfilled]: (state, action) => action.payload,
});

export default recruiterReducer;

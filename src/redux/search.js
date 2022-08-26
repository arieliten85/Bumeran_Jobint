import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const sendAllSearches = createAsyncThunk("ALL_SEARCH", async () => {
  try {
    const data = await axios.get("http://localhost:8000/api/search/all");
    return data.data;
  } catch (error) {
    console.log(error);
  }
});

export const getOneSearches = createAsyncThunk("ONE_SEARCH", async (id) => {
  try {
    const data = await axios.get(`http://localhost:8000/api/search/${id}`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
});

export const createSearches = createAsyncThunk(
  "CREATE_SEARCH",
  async ({
    selectedCountry,
    jobArea,
    position,
    description,
    vacancies,
    jobSchedules,
    salary,
    title,
    category,
  }) => {
    console.log("LLEGO A REDUX");
    try {
      const data = await axios.post("http://localhost:8000/api/search/add", {
        CountryId: Number(selectedCountry),
        AreaId: Number(jobArea),
        position: position?.value,
        description: description?.value,
        vacancies: vacancies?.value,
        jobSchedules: jobSchedules?.value,
        salary: salary?.value,
        title: title?.value,
        category: category?.value,
      });
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteSearch = createAsyncThunk("DELETE_SEARCH", async (id) => {
  try {
    await axios.delete(`http://localhost:8000/api/search/${id}`);
  } catch (error) {
    console.log(error);
  }
});

export const getOneUpDate = createAsyncThunk(
  "ONE_UPDATE",
  async ({
    id,
    selectedCountry,
    jobArea,
    position,
    description,
    vacancies,
    StatusId,
    jobSchedules,
    salary,
    title,
    category,
    updateRec,
    candidates,
    ratingRecruiter,
    startDate,
    finishDate,
    searchTime,
  }) => {
    console.log("ACAAAA", typeof selectedCountry);
    try {
      const data = await axios.put(
        `http://localhost:8000/api/search/edit/${id}`,
        {
          CountryId: selectedCountry ? Number(selectedCountry) : undefined,
          AreaId: jobArea ? Number(jobArea) : undefined,
          position: position?.value,
          description: description?.value,
          vacancies: vacancies?.value,
          StatusId,
          jobSchedules: jobSchedules?.value,
          salary: salary?.value,
          title: title?.value,
          category: category?.value,
          RecruiterId: updateRec,
          candidates: candidates?.value,
          ratingRecruiter: ratingRecruiter?.value,
          startDate: startDate,
          finishDate: finishDate,
          searchTime: searchTime,
        }
      );
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const searchReducer = createReducer(
  {},
  {
    [getOneSearches.fulfilled]: (state, action) => action.payload,
    [createSearches.fulfilled]: (state, action) => action.payload,
    [getOneUpDate.fulfilled]: (state, action) => action.payload,
    [sendAllSearches.fulfilled]: (state, action) => action.payload,
  }
);

export default searchReducer;

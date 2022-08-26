import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const contSlice = createSlice({
  name: "CONT",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
  },
});

export const { increment } = contSlice.actions;
export default contSlice.reducer;

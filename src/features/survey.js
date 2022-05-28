import { createSlice } from "@reduxjs/toolkit";

export const surveySlice = createSlice({
  name: "survey",
  initialState: {
    value: [],
  },
  reducers: {
    saveData: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { saveData } = surveySlice.actions;

export default surveySlice.reducer;

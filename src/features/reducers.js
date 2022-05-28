import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
  name: "question",
  initialState: {
    value: { questionNumber: 1, question: "What is your age?" },
  },
  reducers: {
    displayQuestion: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default questionSlice.reducer;

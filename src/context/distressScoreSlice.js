import { createSlice } from "@reduxjs/toolkit";

const distressScoreSlice = createSlice({
  name: "distressScore",
  initialState: {
    scores: [],
  },
  reducers: {
    updateDistressScore: (state, action) => {
      const { id, score } = action.payload;
      const existingIndex = state.scores.findIndex((item) => item.id === id);
      if (existingIndex !== -1) {
        state.scores[existingIndex].score = score;
      } else {
        state.scores.push({ id, score });
      }
    },
  },
});

export const { updateDistressScore } = distressScoreSlice.actions;
export default distressScoreSlice.reducer;

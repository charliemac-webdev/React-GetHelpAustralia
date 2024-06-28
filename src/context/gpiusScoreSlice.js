import { createSlice } from "@reduxjs/toolkit";

const gpiusScoreSlice = createSlice({
  name: "gpiusScore",
  initialState: {
    scores: [],
  },
  reducers: {
    updateGpiusScore: (state, action) => {
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

export const { updateGpiusScore } = gpiusScoreSlice.actions;
export default gpiusScoreSlice.reducer;

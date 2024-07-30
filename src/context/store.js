import { configureStore } from "@reduxjs/toolkit";
import distressScoreReducer from "./distressScoreSlice";
import gpiusScoreReducer from "./gpiusScoreSlice";
import wellbeingScoreReducer from "./wellbeingScoreSlice";
import startingPointScoreReducer from "./startingPointScoreSlice";
import emotionScoreReducer from "./emotionScoreSlice";

export const store = configureStore({
  reducer: {
    distressScore: distressScoreReducer,
    gpiusScore: gpiusScoreReducer,
    wellbeingScore: wellbeingScoreReducer,
    startingPointScore: startingPointScoreReducer,
    emotionScore: emotionScoreReducer,
  },
});

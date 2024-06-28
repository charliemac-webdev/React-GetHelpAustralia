import { configureStore } from "@reduxjs/toolkit";
import distressScoreReducer from "./distressScoreSlice";
import gpiusScoreReducer from "./gpiusScoreSlice";

export const store = configureStore({
  reducer: {
    distressScore: distressScoreReducer,
    gpiusScore: gpiusScoreReducer,
  },
});

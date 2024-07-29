import { configureStore } from "@reduxjs/toolkit";
import distressScoreReducer from "./distressScoreSlice";
import gpiusScoreReducer from "./gpiusScoreSlice";
import wellbeingScoreReducer from "./wellbeingScoreSlice";

export const store = configureStore({
  reducer: {
    distressScore: distressScoreReducer,
    gpiusScore: gpiusScoreReducer,
    wellbeingScore: wellbeingScoreReducer,
  },
});

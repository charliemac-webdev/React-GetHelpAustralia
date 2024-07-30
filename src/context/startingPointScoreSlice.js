import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const submitStartingPointScoreToNetlify = createAsyncThunk(
  "startingPointScore/submitForm",
  async (formData, { rejectWithValue }) => {
    try {
      // Log the form data being sent
      console.log("Submitting form data:", Object.fromEntries(formData));

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        // Log the error response
        const errorText = await response.text();
        console.error("Form submission failed:", response.status, errorText);
        throw new Error(
          `Form submission failed: ${response.status} ${errorText}`
        );
      }

      const result = await response.text();
      console.log("Form submission successful:", result);
      return result;
    } catch (error) {
      console.error("Error in form submission:", error);
      return rejectWithValue(error.message);
    }
  }
);

const startingPointScoreSlice = createSlice({
  name: "startingPointScore",
  initialState: {
    scores: [],
    submissionStatus: null,
  },
  reducers: {
    updateStartingPointScores: (state, action) => {
      state.scores = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitStartingPointScoreToNetlify.pending, (state) => {
        state.submissionStatus = "loading";
      })
      .addCase(submitStartingPointScoreToNetlify.fulfilled, (state) => {
        state.submissionStatus = "succeeded";
      })
      .addCase(submitStartingPointScoreToNetlify.rejected, (state) => {
        state.submissionStatus = "failed";
      });
  },
});

export const { updateStartingPointScores } = startingPointScoreSlice.actions;
export default startingPointScoreSlice.reducer;

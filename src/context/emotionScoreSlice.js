import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const submitEmotionScoreToNetlify = createAsyncThunk(
  "emotionScore/submitForm",
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

const emotionScoreSlice = createSlice({
  name: "emotionScore",
  initialState: {
    scores: [],
    submissionStatus: null,
  },
  reducers: {
    updateEmotionScores: (state, action) => {
      state.scores = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitEmotionScoreToNetlify.pending, (state) => {
        state.submissionStatus = "loading";
      })
      .addCase(submitEmotionScoreToNetlify.fulfilled, (state) => {
        state.submissionStatus = "succeeded";
      })
      .addCase(submitEmotionScoreToNetlify.rejected, (state) => {
        state.submissionStatus = "failed";
      });
  },
});

export const { updateEmotionScores } = emotionScoreSlice.actions;
export default emotionScoreSlice.reducer;

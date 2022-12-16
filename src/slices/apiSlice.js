import { createSlice } from '@reduxjs/toolkit';

export const apiSlice = createSlice({
  name: 'api',
  initialState: {
    isLoading: false,
    quotes: [],
  },
  reducers: {
    startLoadingQuotes: (state) => {
      state.isLoading = true;
    },
    getQuotes: (state, action) => {
      state.isLoading = false;
      state.quotes = action.payload.quotes;
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoadingQuotes, getQuotes } = apiSlice.actions;

export default apiSlice.reducer;

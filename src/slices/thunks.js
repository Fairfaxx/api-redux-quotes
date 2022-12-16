import { getQuotes, startLoadingQuotes } from './apiSlice';

export const getApiQuotes = (url) => {
  return async (dispatch) => {
    dispatch(startLoadingQuotes());
    const response = await fetch(url);
    const data = await response.json();
    dispatch(getQuotes({ quotes: data.quotes }));
  };
};

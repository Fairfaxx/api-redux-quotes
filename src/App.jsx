import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getQuotes } from './slices/apiSlice';
import { QuotesApi } from './components/QuotesApi';
import { getApiQuotes } from './slices/thunks';

function App() {
  const url = 'https://dummyjson.com/quotes';
  const { isLoading, quotes } = useSelector((state) => state.api);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApiQuotes(url));
  }, []);

  return (
    <div className="container mb-5">
      <div className="d-flex d-flex flex-column">
        <h1 className="text-center mt-5">Random Quotes</h1>
        <QuotesApi quotes={quotes} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;

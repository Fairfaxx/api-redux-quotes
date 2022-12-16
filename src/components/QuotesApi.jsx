export const QuotesApi = ({ quotes, isLoading }) => {
  return (
    <div className="d-flex flex-wrap justify-content-around">
      {isLoading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        ''
      )}
      {quotes?.map((quote) => (
        <div key={quote.id} className="mt-3">
          <div className="card" style={{ width: '18rem', height: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">{quote.author}</h5>
              <p className="card-text">{quote.quote}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

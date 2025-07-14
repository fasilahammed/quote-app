import React, { useEffect, useState } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data.quotes.slice(0, 10));
      })
      .catch((error) => console.error("Error fetching quotes:", error));
  }, []); 

  return (
    <div style={{ padding: "20px" }}>
      {quotes.map((quote) => (
        <h3 key={quote.id}>
          "{quote.quote}" - {quote.author}
        </h3>
      ))}
    </div>
  );
}

export default App;
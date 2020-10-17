import React, { Fragment, useEffect, useState } from "react";
import "./App.css";

const BASE_URL = `https://breaking-bad-quotes.herokuapp.com/v1/quotes`;

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const handleClick = async () => {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    console.log(data);
    setQuote(data[0].quote);
    setAuthor(data[0].author);
  };

  const fetchData = async () => {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    console.log(data);
    setQuote(data[0].quote);
    setAuthor(data[0].author);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      <header>
        <img src="logo.png" alt="" />
      </header>
      <div className="container">
        <h1>Breaking Bad Quote Generator</h1>
        <button onClick={handleClick}>Get New Quote</button>
        <p className="quote">{quote}</p>
        <p className="author">- {author}</p>
      </div>
    </Fragment>
  );
}

export default App;

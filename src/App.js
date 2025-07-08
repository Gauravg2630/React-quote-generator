import React, { useState } from 'react';
import './App.css';

const quotes = [
  {
    text: "Talk to your favourite person when you feel very low",
    author: "Gorav Gumber(me)",
  },
  {
    text: "Don't let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    text: "It's not whether you get knocked down, it's whether you get up.",
    author: "Vince Lombardi",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="app">
      <h1>📜 Quote Generator</h1>
      <div className="quote-box">
        <p className="quote">“{quote.text}”</p>
        <p className="author">— {quote.author}</p>
        <button onClick={generateQuote}>New Quote</button>
      </div>
    </div>
  );
}

export default App;

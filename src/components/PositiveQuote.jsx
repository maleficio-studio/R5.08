// components/PositiveQuote.jsx
import { useState } from "react";
import phrases from "../data/phrases";
import QuoteButton from "./QuoteButton";
import QuoteDisplay from "./QuoteDisplay";

function PositiveQuote() {
  const [quote, setQuote] = useState(null);
  const [key, setKey] = useState(0);

  const handleClick = () => {
    const random = phrases[Math.floor(Math.random() * phrases.length)];
    setQuote(random);
    setKey((prev) => prev + 1);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Citation du jour</h1>
      <QuoteButton onClick={handleClick} />
      <QuoteDisplay quote={quote} animKey={key} />
    </div>
  );
}

export default PositiveQuote;

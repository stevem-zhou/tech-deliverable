import React from "react";
import "./Quote.css";

export default function Quote({name, message, time}) {
  return (
    <>
      <div className="quote--container">
        <h3 className="quote--name">{name}:</h3>
        <p className="quote--message">"{message}"</p>
        <p className="quote--time">- {time}</p>
      </div>
      <hr />
    </>
  );
}

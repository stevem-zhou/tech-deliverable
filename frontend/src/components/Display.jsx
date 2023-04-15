import React, { useState, useEffect } from "react";
import axios from "axios";
import Quote from "./Quote";
import Form from "./Form";
import "./Display.css";

export default function Display() {
  const [maxAge, setMaxAge] = useState("");
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/get-quote?maxAge=${maxAge}`)
      .then((res) => {
        setQuotes(res.data.posts);
      })
      .catch((err) => console.log(err));
  }, [maxAge]);

  function handleChange(event) {
    const { value } = event.target;
    setMaxAge(value);
  }

  const newQuotes = quotes.map((obj) => {
    return (
      maxAge !== "" && (
        <Quote
          className="quote"
          key={obj.time}
          message={obj.message}
          name={obj.name}
          time={new Date(obj.time).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        />
      )
    );
  });

  return (
    <div className="display--form--container">
      <div className="form--container">
        <h2>Submit A Quote</h2>
        <Form setQuotes={setQuotes} />
      </div>
      <h2>Previous Quotes</h2>
      <div className="age--container">
        <label htmlFor="maxAge" className="quote--label">
          Quote Age:
        </label>
        <select
          name="maxAge"
          id="maxAge"
          onChange={handleChange}
          className="display--select"
        >
          <option value="">CHOOSE AN OPTION</option>
          <option value="year">Up to a year ago</option>
          <option value="month">Up to a month ago</option>
          <option value="week">Up to a week ago</option>
          <option value="all">All the quotes</option>
        </select>
      </div>
      <div className="messages">{newQuotes.reverse()}</div>
    </div>
  );
}

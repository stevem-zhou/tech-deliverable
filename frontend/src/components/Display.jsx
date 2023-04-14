import React, { useEffect, useState } from "react";
import axios from "axios";
import Quote from "./Quote";

export default function Display() {
  const [maxAge, setMaxAge] = useState("");
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/get-quote?maxAge=${maxAge}`)
      .then((res) => {
        createQuotes(res.data.posts);
      })
      .catch((err) => console.log(err));
  }, [maxAge]);

  function handleChange(event) {
    const { value } = event.target;
    setMaxAge(value);
  }

  function createQuotes(quoteJSON) {
    const newQuotes = quoteJSON.map((obj) => {
      return (
        <Quote
          key={obj.time}
          message={obj.message}
          name={obj.name}
          time={obj.time}
        />
      );
    });
    setQuotes(newQuotes);
  }

  console.log(quotes);

  return (
    <div>
      <label htmlFor="max-age">Quote Age:</label>
      <select name="maxAge" id="max-age" onChange={handleChange}>
        <option value="">---Choose an option---</option>
        <option value="year">Up to a year ago</option>
        <option value="month">Up to a month ago</option>
        <option value="week">Up to a week ago</option>
        <option value="all">All the quotes</option>
      </select>
      <div className="messages">{quotes}</div>
    </div>
  );
}

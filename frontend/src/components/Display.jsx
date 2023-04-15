import React, { useEffect, useState } from "react";
import axios from "axios";
import Quote from "./Quote";
import Form from "./Form";

export default function Display() {
  const [maxAge, setMaxAge] = useState("");
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/get-quote?maxAge=${maxAge}`)
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
      maxAge ? <Quote
        key={obj.time}
        message={obj.message}
        name={obj.name}
        time={new Date(obj.time).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      /> : []
    );
  });


  console.log(quotes);

  return (
    <div>
      <h2>Submit a quote</h2>
      <Form setQuotes={setQuotes} maxAge={maxAge}/>
      <h2>Previous Quotes</h2>
      <label htmlFor="max-age">Quote Age:</label>
      <select name="maxAge" id="max-age" onChange={handleChange}>
        <option value="">---Choose an option---</option>
        <option value="year">Up to a year ago</option>
        <option value="month">Up to a month ago</option>
        <option value="week">Up to a week ago</option>
        <option value="all">All the quotes</option>
      </select>
      <div className="messages">{newQuotes}</div>
    </div>
  );
}

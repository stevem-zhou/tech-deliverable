import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Form(props) {
  const [formInfo, setFormInfo] = useState({
    name: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormInfo((prevFormInfo) => {
      return {
        ...prevFormInfo,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const params = new URLSearchParams();
    params.append("name", formInfo.name)
    params.append("message", formInfo.message)
    axios.post("/api/quote", params)
    .then(res => console.log(res))
    .catch(err => console.log(err));

    const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    props.setQuotes(prevQuotes => {
      return [...prevQuotes, {
        name: formInfo.name,
        message: formInfo.message,
        time: currentDate
      }]
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input-name">Name</label>
      <input
        type="text"
        name="name"
        id="input-name"
        value={formInfo.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="input-message">Quote</label>
      <input
        type="text"
        name="message"
        id="input-message"
        value={formInfo.message}
        onChange={handleChange}
        required
      />
      <button>Submit</button>
    </form>
  );
}

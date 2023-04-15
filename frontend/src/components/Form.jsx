import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Form.css";

export default function Form({ setQuotes }) {
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
    params.append("name", formInfo.name);
    params.append("message", formInfo.message);
    axios
      .post("/api/quote", params)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    const currentDate = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    setQuotes((prevQuotes) => {
      return [
        ...prevQuotes,
        {
          name: formInfo.name,
          message: formInfo.message,
          time: currentDate,
        },
      ];
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input-name">Name:</label>
      <input
        type="text"
        name="name"
        id="input-name"
        value={formInfo.name}
        onChange={handleChange}
        className="first--input"
        required
      />
      <br />
      <label htmlFor="input-message">Quote:</label>
      <input
        type="text"
        name="message"
        id="input-message"
        value={formInfo.message}
        onChange={handleChange}
        required
      />
      <br />
      <div className="button">
        <button>Submit</button>
      </div>
    </form>
  );
}

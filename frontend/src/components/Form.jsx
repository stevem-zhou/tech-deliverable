import React, { useEffect, useState } from "react";

export default function Form() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    message: "",
    time: "",
    maxAge: "",
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
    axios
      .post("/quote", {
        "name": formInfo.name,
        "message": formInfo.message,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }



  return (
    <form onSubmit={handleSubmit} action="api/quote" method="post">
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

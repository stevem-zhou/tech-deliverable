import React, { useState } from "react";

export default function Form() {
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
    console.log(params)
    axios.post("/api/quote", params)
    .then(res => console.log(res))
    .catch(err => console.log(err));

    console.log(formInfo)
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

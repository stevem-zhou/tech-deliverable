import React from "react";

export default function Form() {
  const [formInfo, setFormInfo] = React.useState({
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
    console.log(formInfo);
  }

  React.useEffect(() => {

  }, [])

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

{/* <label htmlFor="max-age">Quote Age</label>
      <select name="maxAge" id="max-age" onChange={handleChange}>
        <option value="">---Choose an option---</option>
        <option value="year">Up to a year ago</option>
        <option value="month">Up to a month ago</option>
        <option value="week">Up to a week ago</option>
        <option value="all">All the quotes</option>
      </select> */}
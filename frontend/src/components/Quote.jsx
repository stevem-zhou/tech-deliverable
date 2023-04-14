import React from "react";

export default function Quote(props) {
  console.log(props);
  return (
    <>
      <p>
        "{props.message}" - {props.name}, {props.time}
      </p>
    </>
  );
}

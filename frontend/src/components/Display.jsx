import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Display() {


  useEffect(() => {
    axios.get("http://127.0.0.1:8000/get-quote?maxAge=week").then(res => {
        console.log(res.data.posts)
    }).catch(err => console.log(err))
  }, []);

  return (
    <div className="messages">
      <p>Peter Anteater</p>
      <p>Zot Zot Zot!</p>
      <p>Every day</p>
    </div>
  );
}

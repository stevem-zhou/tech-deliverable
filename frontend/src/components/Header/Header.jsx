import React from "react";
import quoteBookLogo from "../../images/quotebook.png";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <img src={quoteBookLogo} className="header--logo" />
      <h1>Hack @ UCI Tech Deliverable</h1>
    </header>
  );
}

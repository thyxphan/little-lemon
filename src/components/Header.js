import React from "react";
import logo from "../assets/little-lemon.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" width="150" />
      <h1>Little Lemon</h1>
    </header>
  );
}

export default Header;
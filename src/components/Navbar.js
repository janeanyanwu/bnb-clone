import React from "react";
import Logo from "./Airbnb-logo.png";
function Navbar() {
  return (
    <nav>
      <img src={Logo} alt="air bnb logo" className="nav--logo"></img>
    </nav>
  );
}
export default Navbar;

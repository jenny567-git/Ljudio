import React from "react";
import { Link } from "react-router-dom";

import logo from '../images/logo2-edit.png'

function Navbar() {
  return (
    <div>
        <nav className="container">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
    </div>
  )
}

export default Navbar;

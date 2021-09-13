import React from "react";
import { Link } from "react-router-dom";


import "./Navbar.css";
import logo from '../images/logo2-edit.png'
import Searchbar from "./Searchbar";

function Navbar() {
  return (
    <div>
        <nav className="container">
          <img src={logo} alt="" />
          <Link to="/">Home</Link>
          <Link to="/artists">All artists</Link>
          <Link to="/songs">All songs</Link>
          <Searchbar/>
        </nav>
    </div>
  )
}

export default Navbar;

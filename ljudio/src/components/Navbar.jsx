import React from "react";
import { Link } from "react-router-dom";


import "./Navbar.css";
import logo from '../images/logo2-edit.png'
import Searchbar from "./Searchbar";

function Navbar({searchResults, search2}) {
  return (
    <div>
        <nav className="container">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <Link to="/">Home</Link>
          <Link to="/artists">All artists</Link>
          <Link to="/songs">All songs</Link>
          {/* <Searchbar string={searchString} search2={search2}/> */}
        </nav>
    </div>
  )
}

export default Navbar;

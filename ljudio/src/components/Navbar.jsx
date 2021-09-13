import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Artists from "../components/pages/Artists";
import Songs from "../components/pages/Songs";
import Home from "../components/pages/Home";

import "./Navbar.css";

function Navbar() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/artists">All artists</Link>
          <Link to="/songs">All songs</Link>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/artists">
            <Artists />
          </Route>
          <Route path="/songs">
            <Songs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Navbar;

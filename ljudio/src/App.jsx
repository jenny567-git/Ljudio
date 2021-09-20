import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/Footer";

import Artist from "./components/pages/Artist";
import Song from "./components/pages/Song";
import Home from "./components/pages/Home";
import About from "./components/pages/About";


function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/artist/:id">
            <Artist />
          </Route>
          <Route path="/song/:id">
            <Song />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;

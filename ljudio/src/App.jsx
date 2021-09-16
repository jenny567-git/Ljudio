import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/Footer";

import Artists from "./components/pages/Artists";
import Songs from "./components/pages/Songs";
import Home from "./components/pages/Home";


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
            <Artists />
          </Route>
          <Route path="/songs">
            <Songs />
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

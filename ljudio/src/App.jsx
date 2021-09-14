import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/Footer";

import Artists from "./components/pages/Artists";
import Songs from "./components/pages/Songs";
import Home from "./components/pages/Home";

function App() {
  const [searchResults, setSearchResult] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    const getResults = async () => {
      const resultsFromServer = await fetchResults();
      setSearchResult(resultsFromServer);
    };
    getResults();
  }, [searchResults]);

  const fetchResults = async () => {
    const res = await fetch(
      "https://yt-music-api.herokuapp.com/api/yt/search/" + searchString
    );
    const data = await res.json();
    console.log("data", data);
    return data;
  };


  return (
    <Router>
      <header>
        <Navbar searchResults={searchResults} searchString={searchString}/>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Home searchResults={searchResults} searchString={searchString}/>
          </Route>
          <Route path="/artists">
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

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/Footer";

import Artist from "./components/pages/Artist";
import Song from "./components/pages/Song";
import Home from "./components/pages/Home";

function App() {
  const [searchResults, setSearchResult] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    console.log('searchstring in app', searchString);
    // const search =  async () => {
    //   // e.preventDefault()
    //   console.log('string', searchString);
    //   var response = await fetch('https://yt-music-api.herokuapp.com/api/yt/songs/' + searchString) // Default is GET
    //     var result = await response.json()
    //     if (result) {
    //       console.log('aync', result);
    //       // setSearchResult(result)
    //       setSearchResult(prevState => {
    //         return result
    //       })
    //       console.log('sresult', searchResults);
    //     }
    //   }
    // search()
  }, [searchString])

  useEffect(() => {
    console.log('searchResult in app', searchResults);
  }, [searchResults])


  // useEffect(() => {
  //   const getResults = async () => {
  //     const resultsFromServer = await fetchResults();
  //     setSearchResult(resultsFromServer);
  //     console.log(searchResults);
  //   };
  //   getResults();
  //   //tried searchResults - infinite loop
  //   //only run on first time/on mount
  // }, []);

  // useEffect( () => {
  //     search2()
  // }, [searchString])

  // const fetchResults = async () => {
  //   const res = await fetch(
  //     "https://yt-music-api.herokuapp.com/api/yt/search/" + searchString
  //   );
  //   const data = await res.json();
  //   console.log("data", data);                 
  //   return data;
  // };

  const search2 =  async (e) => {
    e.preventDefault()
    // console.log('string', searchString);
    var response = await fetch(
      'https://yt-music-api.herokuapp.com/api/yt/search/' + searchString
      ) // Default is GET
      var result = await response.json()
      if (result) {
        console.log('aync', result);
        // setSearchResult(result)
        setSearchResult(prevState => {
          return result
        })
        console.log('sresult', searchResults);
      }
    }

    const getString = (s) => {
      // setSearchString(s)
      setSearchString(prevState => {
        return s
      })
    }

  return (
    <Router>
      <header>
        <Navbar searchResults={searchResults} search2={search2}/>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Home searchResults={searchResults} search2={search2} onString={getString}/>
          </Route>
          <Route path="/artist/:id">
            <Artist />
          </Route>
          <Route path="/song/:id">
            <Song />
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

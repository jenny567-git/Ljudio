import React, { useState, useContext, useRef } from "react";
import { StoreContext } from "../utils/store";

import "./Searchbar.css";

function Searchbar() {
  const [searchString, setSearchString] = useState("");
  // const [type, setType] = useState("songs");
  const {type: [type, setType],} = useContext(StoreContext);
  const {results: [results, setResults]} = useContext(StoreContext);

  const search2 = async (e) => {
    e.preventDefault();
    const radiovalue = document.querySelector(
      'input[type="radio"]:checked'
    ).value;
    console.log("radio", radiovalue);

    switch (radiovalue) {
      case "artists":
        var response = await fetch(
          "https://yt-music-api.herokuapp.com/api/yt/artists/" + searchString
        );
        break;
      case "albums":
        var response = await fetch(
          "https://yt-music-api.herokuapp.com/api/yt/albums/" + searchString
        );
        break;
      default:
        var response = await fetch(
          "https://yt-music-api.herokuapp.com/api/yt/songs/" + searchString
        ); // Default is GET
        break;
    }
    var result = await response.json();
    if (result) {
      console.log("aync", result);
      //save results to store context
      setType(radiovalue);
      setResults(result);
      console.log('radiovalue ', radiovalue);
      console.log("context", result);
    }
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search for artists, albums or tracks"
        onChange={(e) => setSearchString(e.target.value)}
      />
      <button onClick={search2}>
        <i className="fa fa-search"></i>
      </button>

      <p>Select type:</p>
      <div>
        <input
          type="radio"
          id="huey"
          name="drone"
          value="songs"
          defaultChecked
        />
        <label htmlFor="huey">Songs</label>
      </div>

      <div>
        <input type="radio" id="dewey" name="drone" value="artists" />
        <label htmlFor="dewey">Artists</label>
      </div>

      <div>
        <input type="radio" id="louie" name="drone" value="albums" />
        <label htmlFor="louie">Albums</label>
      </div>
    </form>
  );
}

export default Searchbar;

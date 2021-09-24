import React, { useState, useContext, useEffect } from "react";
import { StoreContext } from "../utils/store";

function Searchbar() {
  const [searchString, setSearchString] = useState("");
  const {type: [type, setType],} = useContext(StoreContext);
  const {results: [results, setResults]} = useContext(StoreContext);
  const {isLoading: [isLoading, setLoading]} = useContext(StoreContext);

  const search = async (e) => {
    e.preventDefault();
    setLoading(true)
    const radiovalue = document.querySelector(
      'input[type="radio"]:checked'
    ).value;
    
    setType(radiovalue);
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
          ); 
        break;
    }
    var result = await response.json();
    if (result) {
      setResults(result.content);
      setLoading(false)
    }
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search for artists or tracks"
        onChange={(e) => setSearchString(e.target.value)}
      />
      <button onClick={search}>
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

      {/* <div>
        <input type="radio" id="louie" name="drone" value="albums" />
        <label htmlFor="louie">Albums</label>
      </div> */}
    </form>
  );
}

export default Searchbar;

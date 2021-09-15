import React, { useState, useEffect } from "react";

import "./Searchbar.css";

function Searchbar({ search2, onString }) {
  const [searchString, setSearchString] = useState("");
  // const [searchResult, setSearchResult] = useState([]);
  // const [text, setText] = useState([])

  const search = async (e) => {
    e.preventDefault();
    console.log('searchstring in searchbar', searchString);
    onString(searchString);
    search2(e)
  };

  // fetch (`https://yt-music-api.herokuapp.com/api/yt/search/${searchString}`)

  return (
    <form>
      <input
        type="text"
        placeholder="Search for artists, albums or tracks"
        onChange={(e) => setSearchString(e.target.value)}
      />
      <button onClick={search}>
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
}

export default Searchbar;

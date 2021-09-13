import React, { useState } from "react";

function Searchbar() {
  const [searchString, setSearchString] = useState('')

  const search = (string) => {
    // fetch('https://yt-music-api.herokuapp.com/api/yt/search/')
    console.log(string);
  }

  return (
    <form>
      <input type="text" placeholder="Search for artists, albums or tracks" value={searchString} onChange={() => setSearchString(searchString)}/>
      <button onClick={() => search(searchString)}>
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
}

export default Searchbar;

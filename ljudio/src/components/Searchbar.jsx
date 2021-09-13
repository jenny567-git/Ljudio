import React, { useState } from "react";

function Searchbar() {
  const [searchString, setSearchString] = useState('')

  const search = (e) => {
    e.preventDefault()
    console.log(searchString);
    fetch('https://yt-music-api.herokuapp.com/api/yt/search/' + searchString)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
        })  
      }
  const search2 =  async (e) => {
    e.preventDefault()
    var response = await fetch(
      'https://yt-music-api.herokuapp.com/api/yt/search/' + searchString
      ) // Default is GET
      var result = await response.json()
      if (result) {
        console.log('aync', result);
      }
    }

  return (
    <form>
      <input type="text" placeholder="Search for artists, albums or tracks" onChange={(e) => setSearchString(e.target.value)}/>
      <button onClick={search2}>
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
}

export default Searchbar;

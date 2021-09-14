import React, { useState, useEffect } from "react";

import './Searchbar.css'

function Searchbar({string}) {
  const [searchString, setSearchString] = useState('')
  const [searchResult, setSearchResult] = useState([])
  
    // const search = (e) => {
      //   e.preventDefault()
      //   console.log(searchString);
      //   fetch('https://yt-music-api.herokuapp.com/api/yt/search/' + searchString)
      //     .then(res => res.json())
      //     .then(
        //       (result) => {
          //         console.log(result);
          //       })  
          //     }

  // fetch (`https://yt-music-api.herokuapp.com/api/yt/search/${searchString}`)
  const search2 =  async (e) => {
    e.preventDefault()
    var response = await fetch(
      'https://yt-music-api.herokuapp.com/api/yt/search/' + searchString
      ) // Default is GET
      var result = await response.json()
      if (result) {
        console.log('aync', result);
        setSearchResult(result)
        console.log(searchResult);
      }
    }

    // const customStyle = {
    //   margin: "2vw 0"
    // }

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

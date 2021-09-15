import React, {useState, useContext} from "react";
import Player from "./Player";
import { StoreContext } from "../utils/store";

import "./SongResult.css";

function SongResult({ result }) {
  const url = result.thumbnails[0].url;
  const {currentSong: [currentSong, setCurrentSong] } = useContext(StoreContext)

  const songId = (id) =>{
    setCurrentSong(id)
  }

  return (
    <div className="result-div">
      <img src={url} alt="" style={{
          borderRadius:"10px",
          width:"60px"
          }} />
      <div className="song-info">
        <p>
          Artist:
          {/* //error */}
          {/* <span style={{ fontWeight: "bold" }}>{result.artist.name}</span> */}
        </p>
        <p>
          Title: <span style={{ fontWeight: "bold" }}>{result.name}</span>
        </p>
      </div>
      <button onClick={(e) => songId(result.videoId)}>
          <i className="fas fa-play"></i>
          {/* <i className="fas fa-pause"></i> */}
        </button>
      <Player id={result.videoId} />
    </div>
  );
}

export default SongResult;

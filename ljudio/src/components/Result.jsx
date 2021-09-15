import React from "react";
import Player from "./Player";

import "./Result.css";

function Result({ result }) {
  return (
    <div className="result-div">
      <div className="song-info">
        <p>Artist: <span style={{fontWeight: "bold"}}>{result.artist.name}</span></p>
        <p>Title: <span style={{fontWeight: "bold"}}>{result.name}</span></p>
      </div>
      <Player id={result.videoId} />
    </div>
  );
}

export default Result;

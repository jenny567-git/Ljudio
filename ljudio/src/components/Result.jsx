import React from "react";
import Player from "./Player";

import "./Result.css";

function Result({ result }) {
  return (
    <div className="result-div">
      <div className="song-info">
        <p>{result.artist.name}</p>
        <p>{result.name}</p>
      </div>
      <Player id={result.videoId} />
    </div>
  );
}

export default Result;

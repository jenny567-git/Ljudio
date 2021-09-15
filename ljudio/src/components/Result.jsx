import React from "react";
import Player from "./Player";

import "./Result.css";

function Result({ result }) {
  const url = result.thumbnails[0].url;

  return (
    <div className="result-div">
      <img src={url} alt="x" style={{
          borderRadius:"10px",
          width:"60px"
          }} />
      <div className="song-info">
        <p>
          Artist:{" "}
          <span style={{ fontWeight: "bold" }}>{result.artist.name}</span>
        </p>
        <p>
          Title: <span style={{ fontWeight: "bold" }}>{result.name}</span>
        </p>
      </div>
      <Player id={result.videoId} />
    </div>
  );
}

export default Result;

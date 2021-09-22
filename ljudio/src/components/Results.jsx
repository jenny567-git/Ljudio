import React, { useContext, useEffect } from "react";
import SongResult from "./SongResult";
import ArtistResult from "./ArtistResult";
import PlayerControls from "./PlayerControls";
import { StoreContext } from "../utils/store";
import Player from "./Player";

function Results() {
  const {
    type: [type],
    results: [results],
    isLoading: [isLoading],
    currentSongId: [currentSongId],
  } = useContext(StoreContext);

  function renderResult() {
    let comp;
    // console.log("what is type", type);
    // console.log("what is results:", results);
    if (results.content && !isLoading) {
      switch (type) {
        case "artists":
          comp = Array.from(results.content).map((result) => (
            <ArtistResult key={result.browseId} result={result} />
          ));
          break;

        default:
          comp = (
            <>
              {Array.from(results.content).map((result) => (
                <SongResult key={result.videoId} result={result} />
              ))}

              {currentSongId ? (
                <div className="sticky-player">
                  <Player />{" "}
                </div>
              ) : (
                ""
              )}
            </>
          );
          break;
      }
    }
    return <>{comp}</>;
  }
  return (
    <div className={type == "artists" ? "artist-grid" : ""}>
      {renderResult()}
    </div>
  );
}

export default Results;

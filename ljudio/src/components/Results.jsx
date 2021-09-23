import React, { useContext, useEffect } from "react";
import SongResult from "./SongResult";
import ArtistResult from "./ArtistResult";
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
    if (results && !isLoading) {
      switch (type) {
        case "artists":
          comp = Array.from(results).map((result) => (
            <ArtistResult key={result.browseId} result={result} />
          ));
          break;

        default:
          comp = (
            <>
              {Array.from(results).map((result) => (
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

import React, { useContext, useEffect } from "react";
import SongResult from "./SongResult";
import ArtistResult from "./ArtistResult";
import PlayerControls from "./PlayerControls";
import { StoreContext } from "../utils/store";

function Results() {
  const {
    type: [type],
    results: [results],
    isLoading: [isLoading],
    currentSongId: [currentSongId, setCurrentSongId],
    songResult: [songResult, setSongResult],
  } = useContext(StoreContext);
  
  // useEffect(() => {
  //   if (!isLoading) {
  //     console.log("loading in effect", isLoading);
  //     renderResult();
  //   }
  // }, [results]);
  
  const getSongName = () => {
    let resArray = Array.from(results.content)
    let song = resArray.find(x => x.videoId == currentSongId)
    console.log('song info', song);
    return song.name
  }

  const getSongArtist = () => {
    let resArray = Array.from(results.content)
    let song = resArray.find(x => x.videoId == currentSongId)
    console.log('song info', song);
    return song.artist.name
  }

  function renderResult() {
    let comp;
    // console.log("what is type", type);
    console.log("what is results:", results);
    if (results.content !== undefined && !isLoading) {
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
              <div className="sticky-player">
                <div>
                  <p>{currentSongId != undefined ? getSongName() : ''}</p>
                  <p>{currentSongId != undefined ? getSongArtist() : ''}</p>
                </div>
                <PlayerControls id={currentSongId} />
              </div>
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

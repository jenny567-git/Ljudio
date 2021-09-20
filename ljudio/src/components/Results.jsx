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
    isPlaying: [isPlaying, setPlaying],
  } = useContext(StoreContext);

  let song;

  const findSong = () => {
    let resArray = Array.from(results.content);
    song = resArray.find((x) => x.videoId == currentSongId);
  };

  const getSongName = () => {
    if (song == undefined) {
      findSong();
      if (song == undefined) return "";
    }
    return song.name;
  };

  const getSongArtist = () => {
    if (song == undefined) {
      findSong();
      if (song == undefined) return "";
    }
    return song.artist.name;
  };

  function renderResult() {
    let comp;
    // console.log("what is type", type);
    // console.log("what is results:", results);
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
                  <p><b>{currentSongId != undefined ? getSongName() : ""}</b></p>
                  <p><i>{currentSongId != undefined ? getSongArtist() : ""}</i></p>
                </div>
                <div className="sticky-playerControls">
                  <PlayerControls id={currentSongId} />
                </div>
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

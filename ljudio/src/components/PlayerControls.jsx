import React, { useState, useEffect, useContext, Component } from "react";
import { StoreContext } from "../utils/store";

let inPause = false;
let PauseSongId = "";

export const play = (id, volume) => {
  // calling global variable
  if (inPause && id == PauseSongId) {
    window.player.playVideo();
    inPause = false;
  } else {
    window.player.loadVideoById(id);
    window.player.setVolume(volume)
  }
};

function PlayerControls() {
  const {
    results: [results],
    currentSongId: [currentSongId, setCurrentSongId],
    isPlaying: [isPlaying, setPlaying],
    volume: [volume]
  } = useContext(StoreContext);

  const togglePlay = () => {
    isPlaying ? pause() : play(currentSongId, volume);
    setPlaying(!isPlaying);
  };

  //takes care of pause the music upon component unmounts
  useEffect(() => {
    return () => {
      pause();
    };
  }, []);

  const pause = () => {
    inPause = true;
    PauseSongId = currentSongId;
    window.player.pauseVideo();
  };

  let resultArray;
  let currentSongIndex;
  const findSongIndex = () => {
    resultArray = Array.from(results);
    // console.log("resArray:", resultArray);
    currentSongIndex = resultArray.findIndex((x) => x.videoId == currentSongId);
    // console.log("currentsongindex:", currentSongIndex);
  };

  const next = () => {
    if (results) {
      findSongIndex();
      let nextSong = resultArray[currentSongIndex + 1];
      // console.log("next song:", nextSong);
      setCurrentSongId(nextSong.videoId);
      window.player.loadVideoById(nextSong.videoId);
      setPlaying(true);
    }
  };

  const previous = () => {
    if (results) {
      findSongIndex();
      let prevSong = resultArray[currentSongIndex - 1];
      // console.log("prev song:", prevSong);
      setCurrentSongId(prevSong.videoId);
      window.player.loadVideoById(prevSong.videoId);
      setPlaying(true);
    }
  };

  return (
    <>
      <button className="btn" onClick={() => previous()}>
        <i className="fas fa-step-backward"></i>
      </button>
      <button className="btn" onClick={(e) => togglePlay()}>
        {isPlaying ? (
          <i className="fas fa-pause"></i>
        ) : (
          <i className="fas fa-play"></i>
        )}
      </button>
      <button className="btn" onClick={() => next()}>
        <i className="fas fa-step-forward"></i>
      </button>
    </>
  );
}

export default PlayerControls;

import React, { useState, useEffect, useContext, Component } from "react";
import { StoreContext } from "../utils/store";

import "./Player.css";

function Player({ id }) {
  const [isPlaying, setPlaying] = useState(false);
  const {
    results: [results],
  } = useContext(StoreContext);
  const {
    currentSong: [currentSong],
  } = useContext(StoreContext);

  if (currentSong != undefined) {
    console.log("currentsongId", currentSong);
    const arr = Array.from(results.content);
    // console.log('arr', arr);
    const currentId = arr.findIndex((x) => x.videoId == currentSong);
    console.log("current id", currentId);
    // console.log('next id', currentId+1);
    // console.log('prev id', currentId-1);
  }

  const togglePlay = () => {
    setPlaying(!isPlaying);
    isPlaying ? pause() : play();
  };

  //takes care of pause the music upon component unmounts
  useEffect(() => {
    
    return () => {
      pause()
    }
  }, [])

  const play = () => {
    // calling global variable
    console.log("id", id);
    window.player.loadVideoById(id);
    window.player.playVideo();
  };

  const pause = () => {
    window.player.pauseVideo();
  };

  return (
    <div>
      <button className="btn">
        <i className="fas fa-step-backward"></i>
      </button>
      <button className="btn" onClick={(e) => togglePlay()}>
        {isPlaying ? (
          <i className="fas fa-pause"></i>
        ) : (
          <i className="fas fa-play"></i>
        )}
      </button>
      {/* <button onClick={pause}>Pause</button> */}
      <button className="btn">
        <i className="fas fa-step-forward"></i>
      </button>
    </div>
  );
}

export default Player;

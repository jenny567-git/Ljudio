import React, { useState, useEffect, useContext, Component } from "react";
import { StoreContext } from "../utils/store";

import "./Player.css";

export const play = (id) => {
  // calling global variable
  console.log("id", id);
  // window.player.playVideo();
  window.player.loadVideoById(id);
  // setCurrentSongId(id)
};

function PlayerControls({ id }) {
  // const [isPlaying, setPlaying] = useState(false);
  const {
    results: [results],
    currentSongId: [currentSongId, setCurrentSongId],
    isPlaying: [isPlaying, setPlaying]
  } = useContext(StoreContext);

  const togglePlay = () => {
    setPlaying(!isPlaying);
    isPlaying ? pause() : play(currentSongId);
  };

  //takes care of pause the music upon component unmounts
  useEffect(() => {
    
    return () => {
      pause()
    }
  }, [])


  const pause = () => {
    window.player.pauseVideo();
  };

  const next = () => {
    if(results.content){
      let resArray = Array.from(results.content)
      console.log('resArray:', resArray);
      let currentSongIndex = resArray.findIndex(x => x.videoId == currentSongId)
      console.log('currentsongindex:', currentSongIndex);
      let nextSong = resArray[currentSongIndex+1];
      console.log('next song:', nextSong);
      setCurrentSongId(nextSong.videoId)
      window.player.loadVideoById(nextSong.videoId);
    }
  }

  const previous = () => {
    if(results.content){
      let resArray = Array.from(results.content)
      console.log('resArray:', resArray);
      let currentSongIndex = resArray.findIndex(x => x.videoId == currentSongId)
      console.log('currentsongindex:', currentSongIndex);
      let prevSong = resArray[currentSongIndex-1];
      console.log('prev song:', prevSong);
      setCurrentSongId(prevSong.videoId)
      window.player.loadVideoById(prevSong.videoId);
    }
  }
  return (
    <div>
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
    </div>
  );
}

export default PlayerControls;

import React, { useState, useEffect, useContext } from "react";
import { StoreContext } from "../utils/store";

import "./Player.css";

function Player({ id }) {
  const [isPlaying, setPlayPauseClicked] = useState(false);
  const { results } = useContext(StoreContext);
  const { currentSong } = useContext(StoreContext);
  // let a = { content: [] };
  // a = results[0];
  // console.log('array in player', Array.from(a));
  if(currentSong[0] != undefined){
    console.log('currentsongId', currentSong[0]);
    // console.log('array in player', Array.from(currentSong[0].content));
    const arr = Array.from(results[0].content)
    // console.log('arr', arr);
    const currentId = arr.findIndex( x => x.videoId == currentSong[0])
    console.log('current id', currentId);
    // console.log('next id', currentId+1);
    // console.log('prev id', currentId-1);
  }

  useEffect(() => {
    isPlaying ? play(id) : pause();
  });

  // console.log('id in player', id);
  const play = (id) => {
    // calling global variable
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
      <button className="btn" onClick={(e) => setPlayPauseClicked(!isPlaying)}>
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

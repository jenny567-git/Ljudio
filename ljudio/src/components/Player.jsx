import React, {useState, useEffect} from "react";

import "./Player.css";

function Player({id}) {
  const [isPlaying, setPlayPauseClicked] = useState(false);

  useEffect(() => {
    isPlaying ? play(id) : pause()
  })

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
      <button className="btn" onClick={(e) => setPlayPauseClicked(!isPlaying)}
        >
        {isPlaying ? <i className="fas fa-pause"></i>: <i className="fas fa-play"></i>}
      </button>
      {/* <button onClick={pause}>Pause</button> */}
    </div>
  );
}

export default Player;

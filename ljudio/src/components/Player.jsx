import React from "react";

function Player() {
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
      <button onClick={(e) => play("DXxeOvvNNwc")}>
        The Black Page #1 on piano
      </button>
      <button onClick={(e) => play("CtkZxnkbjtI")}>
        The Black Page #2 live band
      </button>
      <button onClick={pause}>Pause</button>
    </div>
  );
}

export default Player;

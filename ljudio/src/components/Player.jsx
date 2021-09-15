import React from "react";

function Player({id}) {
  console.log('id in player', id);
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
      <button onClick={(e) => play(`${id}`)}>
        Play
      </button>
      {/* <button onClick={(e) => play("CtkZxnkbjtI")}>
        The Black Page #2 live band
      </button> */}
      <button onClick={pause}>Pause</button>
    </div>
  );
}

export default Player;

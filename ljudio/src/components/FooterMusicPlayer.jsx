import React from "react";

function FooterMusicPlayer() {
    const title = 'Song name'
    const artist = 'Artist name'

  return (
    <div className="footerplayer">
      {/* <div className="playback">
                {
                    !isNaN(seekTime) &&
                    <Slider style={{color: useStyle.theme}}
                            className={"playback-completed"}
                            value={seekTime} onChange={handleSeekChange}/>
                }
            </div> */}
      <div className="curr-music-details">
        <p>{title}</p>
        <p>{artist}</p>
      </div>
      {/* <Button
                    startIcon={<Avatar variant="square" src={require("../assets/img/" + img).default} alt={name}/>}
                    
                    onClick={handleBannerToggle}
                    className="curr-music-container">
                    <div className="curr-music-details">
                    <Name name={name} className={"song-name"} length={name.length}/>
                    <Name name={author_name} className={"author-name"}
                    length={author_name.length}/>
                    </div>
                </Button> */}
      <div className="playback-controls">
        <button>
          <i className="fas fa-step-backward"></i>
        </button>
        <button>
          <i className="fas fa-play"></i>
          <i className="fas fa-pause"></i>
        </button>
        <button>
            <i className="fas fa-step-forward"></i>
        </button>

        {/* <ControlsToggleButton
          style={pointer}
          type={"repeat"}
          defaultIcon={<RepeatIcon fontSize={"large"} />}
          changeIcon={<RepeatOneIcon fontSize={"large"} />}
          onClicked={handleToggle}
        />

        <ControlsToggleButton
          style={pointer}
          type={"prev"}
          defaultIcon={<SkipPreviousIcon fontSize={"large"} />}
          changeIcon={<SkipPreviousIcon fontSize={"large"} />}
          onClicked={handleToggle}
        /> */}
        
        <audio src="https://www.youtube.com/watch?v=Wt2EKPIFPoQ"></audio>
        {/* <audio
          ref={audioElement}
          src={require("../assets/music/" + musicName).default}
          preload={"metadata"}
        /> */}

        {/* <ControlsToggleButton
          style={pointer}
          type={"play-pause"}
          defaultIcon={<PlayArrowIcon fontSize={"large"} />}
          changeIcon={<PauseIcon fontSize={"large"} />}
          onClicked={handleToggle}
        />

        <ControlsToggleButton
          style={pointer}
          type={"next"}
          defaultIcon={<SkipNextIcon fontSize={"large"} />}
          changeIcon={<SkipNextIcon fontSize={"large"} />}
          onClicked={handleToggle}
        />
      </div>
      <div className="playback-widgets">
        <div className="timer">
          <p>
            <span>{formatTime(currTime)}</span>/
            <span>{formatTime(duration)}</span>
          </p>
        </div>
        <div className={"slider"}>
          <Slider
            style={{ color: useStyle.theme }}
            value={volume}
            onChange={handleVolumeChange}
          />
        </div> */}
        {/* <ControlsToggleButton style={pointer} type={"volume"}
                                      defaultIcon={<VolumeUpIcon/>}
                                      changeIcon={<VolumeOffIcon/>}
                                      onClicked={handleToggle}/> */}
      </div>
    </div>
  );
}

export default FooterMusicPlayer;

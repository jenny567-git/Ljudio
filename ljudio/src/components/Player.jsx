import React, { useContext, useEffect, useState } from "react";
import PlayerControls from "./PlayerControls";
import { StoreContext } from "../utils/store";

function Player() {
  const {
    type: [type],
    results: [results],
    isLoading: [isLoading],
    currentSongId: [currentSongId, setCurrentSongId],
    songResult: [songResult, setSongResult],
    isPlaying: [isPlaying, setPlaying],
    volume: [volume, setVolume]
  } = useContext(StoreContext);

  const [currentSec, setCurrentSec] = useState("00");
  const [currentMin, setCurrentMin] = useState(0);
  const [totalSec, setTotalSec] = useState("00");
  const [totalMin, setTotalMin] = useState(0);
  const [timeSlider, setTimeSlider] = useState("00");
  // const [volumeSlider, setVolumeSlider] = useState(20);

  //https://dev.to/ahmedsarhan/create-your-live-watch-and-date-in-react-js-no-3rd-party-hassle-1oa4
  useEffect(() => {
    let getLive;
    if (isPlaying) {
      getLive = setInterval(() => {
        const totalsInMinutes = Math.floor(window.player.getDuration() / 60);
        const totalInSeconds = Math.floor(window.player.getDuration() % 60);

        const totalSecString =
          totalInSeconds < 10 ? `0${totalInSeconds}` : String(totalInSeconds);

        const currentInMinutes = Math.floor(
          window.player.getCurrentTime() / 60
        );
        const currentInSeconds = Math.floor(
          window.player.getCurrentTime() % 60
        );

        const currentSecondString =
          currentInSeconds < 10
            ? `0${currentInSeconds}`
            : String(currentInSeconds);

        setTotalMin(totalsInMinutes);
        setTotalSec(totalSecString);
        setCurrentMin(currentInMinutes);
        setCurrentSec(currentSecondString);
        setTimeSlider(window.player.getCurrentTime());

        //causes problem with player play button when new search is done
        // if(currentInMinutes == totalsInMinutes && currentSecondString==totalSecString){
        //     setPlaying(!isPlaying)
        // }
      }, 1000);
    }
    return () => {
      clearInterval(getLive);
    };
  }, [isPlaying]);

  let song;

  const findSong = () => {
    let resArray
    if(results.content) {
      resArray = Array.from(results.content);
      song = resArray.find((x) => x.videoId == currentSongId);
    }
    if(!results.content && songResult) song = songResult
  };

  const getSongName = () => {
    if (!song) {
      findSong();
      if (!song) return "";
    }
    return song.name;
  };

  const getSongArtist = () => {
    if (!song) {
      findSong();
      if (!song) return "";
    }
    return song.artist.name;
  };

  const updateTimeSlider = (time) => {
    window.player.seekTo(time, true);
    setTimeSlider(time);
  };

  const updateVolumeSlider = (volume) => {
    // console.log(volume);
    window.player.setVolume(volume, true);
    setVolume(volume);
  };

  return (
    <>{!isLoading ? 
      <>
      <div className="sliders">
        {/* <div className="playerInfo"> */}
        <input
          type="range"
          min="0"
          max={window.player.getDuration()}
          value={timeSlider}
          className="slider"
          id="timeSlider"
          onChange={(e) => updateTimeSlider(e.target.value)}
          />
        {/* <div className="volume"> */}
          <i className="fas fa-volume-down"></i>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            className="slider"
            id="volumeSlider"
            onChange={(e) => updateVolumeSlider(e.target.value)}
            />
          <i className="fas fa-volume-up"></i>
        {/* </div> */}
      </div>
      <div className="playerInfo-upperdiv">
        <div className="playerInfo">
          <p>
            {currentMin}:{currentSec} / {totalMin}:{totalSec}
          </p>
          <p>
            <b>{currentSongId ? getSongName() : ""}</b>
          </p>
          <p>
            <i>{currentSongId ? getSongArtist() : ""}</i>
          </p>
        </div>
        <div className="sticky-playerControls">
          {/* <div> */}
            <PlayerControls />
          {/* </div> */}
        </div>
      </div>
        </>
  :''}
  </>
  );
}

export default Player;

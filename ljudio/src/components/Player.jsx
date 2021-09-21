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
  } = useContext(StoreContext);

  const [currentSec, setCurrentSec] = useState('00');
  const [currentMin, setCurrentMin] = useState(0);

  const [timeSlider, setTimeSlider] = useState('00');
  const [totalSec, setTotalSec] = useState('00');
  const [totalMin, setTotalMin] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      setInterval(() => {
        const totalInSeconds = Math.floor(window.player.getDuration() % 60);
        const totalsInMinutes = Math.floor(window.player.getDuration() / 60);

        const totalSecString = (totalInSeconds <10) ? 
        `0${totalInSeconds}` : String(totalInSeconds);
        const totalMinString = totalsInMinutes;

        const currentInSeconds = Math.floor(window.player.getCurrentTime() % 60);
        const currentInMinutes = Math.floor(window.player.getCurrentTime() / 60);
        
        const currentSecondString = (currentInSeconds < 10) ? 
        `0${currentInSeconds}` : String(currentInSeconds);
        const currentMinuteString = currentInMinutes;
        
        setTotalSec(totalSecString);
        setTotalMin(totalMinString);
        setCurrentSec(currentSecondString);
        setCurrentMin(currentMinuteString);
        setTimeSlider(window.player.getCurrentTime());
      }, 1000);
    }
  }, [isPlaying]);

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

  const updateTimeSlider = (newTime) => {
    window.player.seekTo(newTime, true);
    setTimeSlider(newTime);
  };

  return (
    <>
      <div className="playerInfo">
        <input
          type="range"
          min="0"
          max={window.player.getDuration()}
          value={timeSlider}
          className="slider"
          id="playerSlider"
          onChange={(e) => updateTimeSlider(e.target.value)}
        />
        <p>
          {currentMin}:{currentSec} / {totalMin}:{totalSec}
        </p>
        <p>
          <b>{currentSongId != undefined ? getSongName() : ""}</b>
        </p>
        <p>
          <i>{currentSongId != undefined ? getSongArtist() : ""}</i>
        </p>
      </div>
      <div className="sticky-playerControls">
        <PlayerControls />
      </div>
    </>
  );
}

export default Player;

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

  const [currentSec, setCurrentSec] = useState("00");
  const [currentMin, setCurrentMin] = useState(0);
  const [totalSec, setTotalSec] = useState("00");
  const [totalMin, setTotalMin] = useState(0);
  const [timeSlider, setTimeSlider] = useState("00");

  //https://dev.to/ahmedsarhan/create-your-live-watch-and-date-in-react-js-no-3rd-party-hassle-1oa4
  useEffect(() => {
    if (isPlaying) {
      setInterval(() => {
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

        if(currentInMinutes == totalsInMinutes && currentSecondString==totalSecString){
            setPlaying(false)
        }
        
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

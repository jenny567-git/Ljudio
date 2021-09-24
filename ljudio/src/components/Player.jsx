import React, { useContext, useEffect, useState } from "react";
import PlayerControls from "./PlayerControls";
import { StoreContext } from "../utils/store";

function Player() {
  const {
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
  const [duration, setDuration] = useState("100");
  const [songName, setSongName] = useState("");
  const [artistName, setArtistName] = useState("");


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
        setDuration(window.player.getDuration())
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

  useEffect(() => {
    findSong()
  }, [currentSongId])
  
  const findSong = () => {
    let song;
    if(results) {
      let resArray = Array.from(results);
      song = resArray.find((x) => x.videoId == currentSongId);
    }
    if(!results && songResult) song = songResult
    if(song){
      setArtistName(song.artist.name)
      setSongName(song.name)
    }

  };

  const updateTimeSlider = (time) => {
    window.player.seekTo(time, true);
    setTimeSlider(time);
  };

  const updateVolumeSlider = (volume) => {
    window.player.setVolume(volume, true);
    setVolume(volume);
  };

  return (
    
      <>
      <div className="sliders">
        <input
          type="range"
          min="0"
          max={duration}
          value={timeSlider}
          className="slider"
          id="timeSlider"
          onChange={(e) => updateTimeSlider(e.target.value)}
          />
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
      </div>
      <div className="playerInfo-upperdiv">
        <div className="playerInfo">
          <p>
            {currentMin}:{currentSec} / {totalMin}:{totalSec}
          </p>
          <p>
            <b>{songName}</b>
          </p>
          <p>
            <i>{artistName}</i>
          </p>
        </div>
        <div className="sticky-playerControls">
            <PlayerControls />
        </div>
      </div>
        </>
  );
}

export default Player;

import React, {useState, useContext} from "react";
import PlayerControls from "./PlayerControls";
import { StoreContext } from "../utils/store";
import { useHistory } from "react-router-dom"

import "./SongResult.css";

function SongResult({ result }) {
  const url = result.thumbnails[0].url;
  const {currentSongId: [currentSongId, setCurrentSongId] } = useContext(StoreContext)
  let history = useHistory()

  const songId = (id) =>{
    setCurrentSongId(id)
  }
  
  const toSongLink = () => {
    history.push('/song/' + result.videoId);
  }

  return (
    <div className="result-div">
      <img src={url} alt="" style={{
          borderRadius:"10px",
          width:"60px"
          }} />
      <div className="song-info">
        <p>
          Artist:
          <span style={{ fontWeight: "bold" }}> {result.artist.name}</span>
        </p>
        <p>
          Title: <span style={{ fontWeight: "bold" }}>{result.name}</span>
        </p>
      </div>
      <button onClick={(e) => songId(result.videoId)}>
          <i className="fas fa-play"></i>
          {/* <i className="fas fa-pause"></i> */}
        </button>
      <PlayerControls id={result.videoId} />
      <button className="btn">
        <i className="fas fa-share" onClick={toSongLink}></i>
      </button>
    </div>
  );
}

export default SongResult;

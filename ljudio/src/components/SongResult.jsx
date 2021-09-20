import React, { useState, useContext } from "react";
import PlayerControls from "./PlayerControls";
import { StoreContext } from "../utils/store";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { play } from "./PlayerControls";

function SongResult({ result }) {
  const url = result.thumbnails[0].url;
  // const [isCopied, setCopy] = useState(false)
  const {
    currentSongId: [currentSongId, setCurrentSongId],
    isPlaying: [isPlaying, setPlaying],
  } = useContext(StoreContext);
  let history = useHistory();
  let urlLink = useParams();

  const toSongLink = () => {
    setPlaying(false);
    history.push("/song/" + result.videoId);
  };

  //removed old button from song-info
  // <button onClick={(e) => songId(result.videoId)}>
  //     <i className="fas fa-play"></i>
  //     {/* <i className="fas fa-pause"></i> */}
  //   </button>

  const sendToPlayer = () => {
    console.log("in send to player", result.videoId);
    setCurrentSongId(result.videoId);
    setPlaying(true);
    play(result.videoId);
  };

  const copyBtn = () => {
    let link = window.location.href + "song/" + result.videoId
    navigator.clipboard.writeText(link);
    setCopy(true)
    // if(navigator.clipboard.readText().then(t => t != window.location.href + "song/" + result.videoId))
    // {
    //   console.log('copy: not same');
    // }
    // alert('Link copied: ' + link)
  };

  return (
    <div className="result-div">
      <img
        src={url}
        alt=""
        style={{
          borderRadius: "10px",
          width: "60px",
        }}
      />
      <div className="song-info">
        <p>
          Artist:
          <span style={{ fontWeight: "bold" }}> {result.artist.name}</span>
        </p>
        <p>
          Title: <span style={{ fontWeight: "bold" }}>{result.name}</span>
        </p>
      </div>
      <div>
        <button className="btn" onClick={(e) => sendToPlayer()}>
          <i className="fas fa-play"></i>
        </button>
      </div>
      {/* <PlayerControls id={result.videoId} /> */}
      <div>
        <button className="btn btn-toLink" onClick={toSongLink}>
          <i className="fas fa-share"></i>
        </button>
      </div>
    </div>
  );
}

export default SongResult;

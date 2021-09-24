import React, { useState, useContext, useEffect } from "react";
import PlayerControls from "./PlayerControls";
import { StoreContext } from "../utils/store";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { play } from "./PlayerControls";

//source: https://www.npmjs.com/package/react-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SongResult({ result }) {

  const {
    currentSongId: [currentSongId, setCurrentSongId],
    isPlaying: [isPlaying, setPlaying],
    volume: [volume, setVolume]
  } = useContext(StoreContext);
  const [isCopied, setCopy] = useState(false);
  const [image, setImage] = useState('')
  let history = useHistory();
  
  useEffect(() => {
    if(result.thumbnails){
      setImage(result.thumbnails[0].url)
    }    
  }, [])
  
  const toSongLink = () => {
    setPlaying(false);
    history.push("/song/" + result.videoId);
  };

  const sendToPlayer = () => {
    // console.log("in send to player", result.videoId);
    setCurrentSongId(result.videoId);
    setPlaying(true);
    play(result.videoId, volume);
  };

  const copyBtn = () => {
    let link = window.location.href + "song/" + result.videoId;
    navigator.clipboard.writeText(link);
    let msg = "Link copied: " + link;
    toast.success(msg, { hideProgressBar: true });
  };

  return (
    <div className="songresult">
      <div className="songresult-innerdiv">
      <img
        src={image}
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
        </div>
      <div className="songresult-btns">
        <button className="btn" onClick={(e) => sendToPlayer()}>
          <i className="fas fa-play"></i>
        </button>
        <button className="btn btn-toLink" onClick={toSongLink}>
          <i className="fas fa-share"></i>
        </button>
        <button className="btn btn-toLink" onClick={() => copyBtn()}>
          {/* {!isCopied ? 'Copy' : 'Copied!'} */}
          Copy
        </button>
        <ToastContainer autoClose={3000} />
      </div>
    </div>
  );
}

export default SongResult;

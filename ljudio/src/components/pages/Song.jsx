import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../utils/store";
import Player from "../Player";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Song() {
  const [isCopied, setCopy] = useState(false);
  const [image, setImage] = useState("");
  const {
    isLoading: [isLoading, setLoading],
    songResult: [songResult, setSongResult],
    currentSongId: [currentSongId, setCurrentSongId],
  } = useContext(StoreContext);

  let { id } = useParams();

  useEffect(() => {
    fetchSongInfo();
  }, []); //on first render

  const fetchSongInfo = async () => {
    setLoading(true);
    var response = await fetch(
      "https://yt-music-api.herokuapp.com/api/yt/songs/" + id
    );
    var result = await response.json();
    if (result) {
      let song = result.content.find((x) => x.videoId == id);
      setSongResult(song);
      setCurrentSongId(id);
      // console.log("song", song);
      if (song.thumbnails) {
        setImage(song.thumbnails[1].url);
      }
      setLoading(false);
    }
  };

  const copyBtn = () => {
    let link = window.location.href;
    navigator.clipboard.writeText(link);
    setCopy(true);
    toast.success("Link copied", { hideProgressBar: true });
  };

  function renderResult() {
    let comp;
    if (!isLoading) {
      comp = (
        <div>
          <img src={image} alt="" />
          <div>{songResult ? <Player /> : ""}</div>
          <br />
          <button className="btn btn-toLink" onClick={() => copyBtn()}>
            {!isCopied ? "Copy" : "Copied!"}
          </button>
          <ToastContainer autoClose={3000} />
        </div>
      );
    }
    return <>{comp}</>;
  }

  return <div className="container">{renderResult()}</div>;
}

export default Song;

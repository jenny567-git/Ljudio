import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../utils/store";
import ArtistProduct from "../ArtistProduct";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Artist() {
  const {
    isLoading: [isLoading, setLoading],
    artistResult: [artistResult, setArtistResult],
  } = useContext(StoreContext);
  const [isCopied, setCopy] = useState(false);
  const [artistSongs, setArtistSongs] = useState();
  const [artistAlbums, setArtistAlbums] = useState();

  let { id } = useParams();

  useEffect(() => {
    getArtist();
  }, []); //on mount

  const getArtist = async (e) => {
    console.log("param id", id);
    setLoading(true);
    var response = await fetch(
      "https://yt-music-api.herokuapp.com/api/yt/artist/" + id
    );
    var result = await response.json();
    if (result) {
      console.log("artist result", result);
      setArtistResult(result);
      setLoading(false);
      setArtistSongs(result.products.singles.content);
      setArtistAlbums(result.products.albums.content);
      console.log("artist songs", result.products.singles.content);
      console.log("artist albums", result.products.albums.content);
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
    // console.log("artist:", artistResult);
    //commented out due to occasionally api error
    // console.log('url:', artistResult.thumbnails[0].url);

    if (!isLoading) {
      comp = (
        <div>
          <img
            src={
              artistResult != undefined ? artistResult.thumbnails[0].url : ""
            }
            alt=""
            className="artistImg"
          />
          <div id="artist-title">
            <h1>{artistResult.name}</h1>
            <button className="btn btn-toLink" onClick={() => copyBtn()}>
              {!isCopied ? "Copy" : "Copied!"}
              {/* Copy */}
            </button>
          </div>
          <p>{artistResult.description}</p>
          <div>
            <h3>Albums</h3>
            <div className="artistProducts">
              {artistAlbums != undefined
                ? Array.from(artistAlbums).map((result) => (
                    <ArtistProduct key={result.browseId} result={result} />
                  ))
                : ""}
            </div>
            <h3>Singles</h3>
            <div className="artistProducts">
              {artistSongs != undefined
                ? Array.from(artistSongs).map((result) => (
                    <ArtistProduct key={result.browseId} result={result} />
                  ))
                : ""}
            </div>
          </div>
          <ToastContainer autoClose={3000} />
        </div>
      );
    }
    return <>{comp}</>;
  }

  return <div className="container">{renderResult()}</div>;
}

export default Artist;

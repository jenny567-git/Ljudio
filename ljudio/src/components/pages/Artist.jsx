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
  const [image, setImage] = useState('')

  let { id } = useParams();

  useEffect(() => {
    getArtist();
  }, []); //on mount

  const getArtist = async (e) => {
    setLoading(true);
    var response = await fetch(
      "https://yt-music-api.herokuapp.com/api/yt/artist/" + id
    );
    var result = await response.json();
    if (result) {
      setArtistResult(result);
      if(result.products && result.products.singles) setArtistSongs(result.products.singles.content);
      if(result.products && result.products.albums) setArtistAlbums(result.products.albums.content);
      
      if(result.thumbnails){
        setImage(result.thumbnails[2].url)
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

    if (!isLoading && artistResult) {
      comp = (
        <div>
          <img
            src={image}
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
          <p>{artistResult.description ? artistResult.description : 'No description available'}</p>
          <div>
            <h3>Albums</h3>
            <div className="artistProducts">
              {artistAlbums 
                ? Array.from(artistAlbums).map((result) => (
                    <ArtistProduct key={result.browseId} result={result} />
                  ))
                : "No albums found"}
            </div>
            <h3>Singles</h3>
            <div className="artistProducts">
              {artistSongs 
                ? Array.from(artistSongs).map((result) => (
                    <ArtistProduct key={result.browseId} result={result} />
                  ))
                : "No Singles found"}
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

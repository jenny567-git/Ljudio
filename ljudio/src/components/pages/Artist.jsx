import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../utils/store";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Artist() {
  const {
    isLoading: [isLoading, setLoading],
    artistResult: [artistResult, setArtistResult],
  } = useContext(StoreContext);
  const [isCopied, setCopy] = useState(false);

  //commented out due to occasionally api error
  //   const imgUrl = getArtistResult.thumbnails[0].url;
  
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
    }
  };

  const copyBtn = () => {
    let link = window.location.href;
    navigator.clipboard.writeText(link);
    setCopy(true);
    toast.success('Link copied', { hideProgressBar: true });
  };

  function renderResult() {
    let comp;
    console.log("artist:", artistResult);
    if (!isLoading) {
      comp = (
        <div>
          {/* <img src={imgUrl} alt="" className="artistImg"/> */}
          <h3>{artistResult.name}</h3>
          <p>{artistResult.description}</p>
          <button className="btn btn-toLink" onClick={() => copyBtn()}>
            {!isCopied ? "Copy" : "Copied!"}
            {/* Copy */}
          </button>
          <ToastContainer autoClose={3000} />
        </div>
      );
    }
    return <>{comp}</>;
  }

  return (
    <div className="container">
      {renderResult()}
    </div>
  );
}

export default Artist;

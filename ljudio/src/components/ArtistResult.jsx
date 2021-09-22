import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { StoreContext } from "../utils/store";

import artistNotFound from '../images/artistNotFound.png'

function ArtistResult({ result }) {
  const [image, setImage] = useState("");
  const {
    artistResult: [artistResult, setArtistResult],
  } = useContext(StoreContext);
  const {
    isLoading: [isLoading, setLoading],
  } = useContext(StoreContext);

  let history = useHistory();

  useEffect(() => {
    if (result.thumbnails) {
      // console.log(result.thumbnails);
      setImage(result.thumbnails[1].url);
    }
  }, []);

  const toArtistLink = () => {
    history.push("/artist/" + result.browseId);
  };

  return (
    <div className="artistresult">
      <img
        src={image}
        alt=""
        onClick={toArtistLink}
        onError={(e)=>{e.target.onerror = null; e.target.src={artistNotFound}}}
      />
      <br />
      <a href={"/artist/" + result.browseId}>{result.name}</a>
    </div>
  );
}

export default ArtistResult;

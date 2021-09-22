import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { StoreContext } from "../utils/store";
//key: brosweId

function ArtistResult({ result }) {

  const [image, setImage] = useState('')
  const { artistResult:[artistResult, setArtistResult] } = useContext(StoreContext);
  const {isLoading: [isLoading, setLoading]} = useContext(StoreContext);

  let history = useHistory()

  useEffect(() => {
      if(result.thumbnails){
          setImage(result.thumbnails[1].url)
      }    
  }, [])

  const toArtistLink = () => {
      history.push('/artist/' + result.browseId);
  };

  return (
    <div className="result-artists">
      <img src={image} alt="" onClick={toArtistLink} />
      <br />
      <a href={'/artist/' + result.browseId}>{result.name}</a>
    </div>
  );
}

export default ArtistResult;

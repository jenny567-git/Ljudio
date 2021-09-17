import React, { useContext } from "react";
import { useHistory } from "react-router-dom"
import { StoreContext } from "../utils/store";
//key: brosweId

function ArtistResult({ result }) {
  const imgUrl = result.thumbnails[1].url;
  const { artistResult:[artistResult, setArtistResult] } = useContext(StoreContext);
  const {isLoading: [isLoading, setLoading]} = useContext(StoreContext);
  let history = useHistory()

  const toArtistLink = () => {
      history.push('/artist/' + result.browseId);
  };

  return (
    <div className="result-artists">
      {/* <a href={`/artists/` + result.browseId}>Go to</a> */}
      <img src={imgUrl} alt="" onClick={toArtistLink} />
      <p>{result.name}</p>
    </div>
  );
}

export default ArtistResult;

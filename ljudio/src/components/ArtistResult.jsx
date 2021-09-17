import React, { useContext } from "react";
import { useHistory } from "react-router-dom"
import { StoreContext } from "../utils/store";
//key: brosweId

function ArtistResult({ result }) {
  const imgUrl = result.thumbnails[1].url;
  const { artistResult:[artistResult, setArtistResult] } = useContext(StoreContext);
  const {isLoading: [isLoading, setLoading]} = useContext(StoreContext);
  let history = useHistory()

  const searchArtist = async (e) => {
    console.log("in s artist", result.browseId);
    setLoading(true)
    // var response = await fetch(
    //   "https://yt-music-api.herokuapp.com/api/yt/artist/" + result.browseId
    // );
    // var callResult = await response.json();
    // if (callResult) {
    //   console.log("artist result", callResult);
    //   setArtistResult(callResult)
      await setArtistId(result.browseId)
      setLoading(false)
      history.push('/artist/' + result.browseId);
    // }
  };

  return (
    <div className="result-artists">
      {/* <a href={`/artists/` + result.browseId}>Go to</a> */}
      <img src={imgUrl} alt="" onClick={searchArtist} />
      <p>{result.name}</p>
    </div>
  );
}

export default ArtistResult;

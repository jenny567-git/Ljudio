import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../utils/store";

function Artist() {
  const {
    isLoading: [isLoading, setLoading],
    artistResult: [getArtistResult, setArtistResult],
  } = useContext(StoreContext);
  // const { artistId:[getArtistId, setArtistId] } = useContext(StoreContext);
//   const imgUrl = getArtistResult.thumbnails[0].url;
  let { id } = useParams();

  useEffect(() => {
    getArtist();
  }, []); //on mount

  const getArtist = async (e) => {
    // console.log("in artist id", getArtistId);
    console.log("param id", id);
    setLoading(true);
    var response = await fetch(
      "https://yt-music-api.herokuapp.com/api/yt/artist/" + id
    );
    var callResult = await response.json();
    if (callResult) {
      console.log("artist result", callResult);
      setArtistResult(callResult);
      setLoading(false);
    }
  };

  function renderResult() {
    let comp;
    console.log("artist:", getArtistResult);
    if (!isLoading) {
      comp = (
        <div>
          {/* <img src={imgUrl} alt="" className="artistImg"/> */}
          <h3>{getArtistResult.name}</h3>
          <p>{getArtistResult.description}</p>
        </div>
      );
    }
    return <>{comp}</>;
  }

  return (
    <div className="container">
      {/* in artists */}
      {renderResult()}
    </div>
  );
}

export default Artist;

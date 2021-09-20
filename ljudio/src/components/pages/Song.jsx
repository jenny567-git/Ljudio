import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../utils/store";
import PlayerControls from "../PlayerControls";

function Song() {
  const {
    isLoading: [isLoading, setLoading],
    songResult: [songResult, setSongResult],
    currentSongId: [currentSongId, setCurrentSongId],
    results: [results, setResults],
  } = useContext(StoreContext);

  let { id } = useParams();

  useEffect(() => {
    setCurrentSongId(id)
    
    if (results.content == undefined) {
      setLoading(false);
      renderResult();
    }

  }, []); //on first render

  function renderResult() {
    let comp;
    if (!isLoading) {
      comp = (
        <div>
          Song player
          <PlayerControls/>
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

export default Song;

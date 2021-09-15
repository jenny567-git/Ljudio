import React, { useContext, useEffect } from "react";
import SongResult from "./SongResult";
import ArtistResult from "./ArtistResult";
import { StoreContext } from "../utils/store";

function Results() {
  const { type, results, isLoading } = useContext(StoreContext);
  let a = { content: [] };
  a = results[0];
  console.log("a list", a.content);

  useEffect(() => {
    if(![isLoading[0]]){
      console.log('loading in effect', isLoading);
      renderResult()
    }
  }, [results[0]])

  function renderResult() {
    let comp;
    console.log("what is type", type[0]);
    console.log('what is result', results[0]);
    if (a.content !== undefined && !isLoading[0]) {
      switch (type[0]) {
        case "artists":
          comp = Array.from(a.content).map((result) => (
            <ArtistResult key={result.browseId} result={result} />
          ));
          break;

        default:
          comp = Array.from(a.content).map((result) => (
            <SongResult key={result.videoId} result={result} />
          ));
          break;
      }
    }
    return <>{comp}</>;
  }
  return <div className={type[0] == 'artists' ? 'artist-grid' : ''}>{renderResult()}</div>;
}

export default Results;

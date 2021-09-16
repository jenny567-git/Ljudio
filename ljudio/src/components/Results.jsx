import React, { useContext, useEffect } from "react";
import SongResult from "./SongResult";
import ArtistResult from "./ArtistResult";
import { StoreContext } from "../utils/store";

function Results() {
  const { type: [type], results: [results], isLoading:[isLoading] } = useContext(StoreContext);
  let a = { content: [] };
  a = results;
  console.log("a list", a.content);

  useEffect(() => {
    if(![isLoading]){
      console.log('loading in effect', isLoading);
      renderResult()
    }
  }, [results])

  function renderResult() {
    let comp;
    console.log("what is type", type);
    console.log('what is result', results);
    if (a.content !== undefined && !isLoading) {
      switch (type) {
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
  return <div className={type == 'artists' ? 'artist-grid' : ''}>{renderResult()}</div>;
}

export default Results;

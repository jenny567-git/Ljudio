import React, { useContext, useEffect } from "react";
import SongResult from "./SongResult";
import ArtistResult from "./ArtistResult";
import { StoreContext } from "../utils/store";

function Results() {
  const { results, type } = useContext(StoreContext);
  let a = { content: [] };
  a = results[0];
    console.log('a list', a.content);


    function renderResult(){
      let comp;
      console.log('what is type', type[0]);
      if(a.content !== undefined){
          switch (type[0]) {
            case 'artists':
              console.log('result in artist', a.content);
                comp = Array.from(a.content).map((result) => (
                  <ArtistResult key={result.browseId} result={result} />
                  ))
              break;
          
            default:
                comp = Array.from(a.content).map((result) => (
                  <SongResult key={result.videoId} result={result} />
                  ))
                  break;
          }
      }
      return (
        <div>
          {comp}
        </div>
      )
    }
  return (
    <div>
        {renderResult()}
    </div>
  );
}

export default Results;

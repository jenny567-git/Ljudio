import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../utils/store";
import Player from "../Player";

function Song() {
  const {
    isLoading: [isLoading, setLoading],
    songResult: [songResult, setSongResult],
    results: [results, setResults],
  } = useContext(StoreContext);

  let { id } = useParams();

  //problem with direct link, empty page
//   useEffect(() => {
//     console.log("in song:", results);
//     // console.log('array: ', Array.from(results));
//     if (Array.from(results).length == 0) {
//       console.log("in if");
      
//     //   setLoading(false);
//       renderResult();
//     }
//   }, []); //on mount

  // const getSong = async() =>{
  //     setLoading(true)
  //     await setSongResult(id)
  //     setLoading(false)
  // }

  function renderResult() {
    let comp;
    console.log("in render: song");
    if (!isLoading) {
      console.log("in render song loading");
      comp = (
        <div>
          Song player
          <Player id={id} />
        </div>
      );
    }
    return <>{comp}</>;
  }

  return (
    <div className="container">
      {/* in songs */}
      {renderResult()}
    </div>
  );
}

export default Song;

import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../utils/store";
import PlayerControls from "../PlayerControls";

function Song() {
  const {
    isLoading: [isLoading, setLoading],
    songResult: [songResult, setSongResult],
    results: [results, setResults],
  } = useContext(StoreContext);

  let { id } = useParams();

  //problem with direct link, empty page

//   const getSong = async()=> {
//     console.log("song id", id);
//     setLoading(true)
//     await id
//     if(id){
//         setLoading(false)
//     }
//   }

  useEffect(() => {
    // console.log("in song:", results.content);
    // console.log('array: ', Array.from(results));
    if (results.content == undefined) {
      // console.log("in if");
      // console.log('id in song', id);
      setLoading(false);
      renderResult();
    }
  }, []); //on mount

  // const getSong = async() =>{
  //     setLoading(true)
  //     await setSongResult(id)
  //     setLoading(false)
  // }

  function renderResult() {
    let comp;
    // console.log("in render: song");
    if (!isLoading) {
      // console.log("in render song loading");
      comp = (
        <div>
          Song player
          <PlayerControls id={id} />
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

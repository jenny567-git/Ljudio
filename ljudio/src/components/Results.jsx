import React, { useContext, useEffect } from "react";
import Result from "./Result";
import { StoreContext } from "../utils/store";

function Results() {
  const { results } = useContext(StoreContext);
  let a = { content: [] };
  a = results[0];
  //   console.log('result in context', results);
  //   console.log('a', a);
    console.log('a list', a.content);
  //    a.content.map(result => (
  //     console.log('result', result)))

  // useEffect(() => {
  //     console.log('in effect', a.content);
  // }, [a])

  return (
    <div>
        {a.content !== undefined ? (
          Array.from(a.content).map((result) => (
            <Result key={result.videoId} result={result} />
          ))
        ) : (
          <p>Make a search</p>
        )}
    </div>
  );
}

export default Results;

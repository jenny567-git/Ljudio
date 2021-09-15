import React, { useContext, useEffect } from "react";
import Result from "./Result";
import { StoreContext } from "../utils/store";

function Results() {
  const { results } = useContext(StoreContext);
  let a = { content: [] };
  a = results[0];
    console.log('a list', a.content);

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

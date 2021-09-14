import React, { useContext } from "react";
import Result from "./Result";
import { StoreContext } from "../utils/store";

function Results() {
  const { results } = useContext(StoreContext);
  const a = results[0]
//   const myarr = [...a]

//   console.log(myarr);
  return (
    <div>
      <div>
        {results.map((result) => (
          <Result key={result.videoId} result={result} />
        ))}
      </div>
      {/* <div>
          {array.forEach(
              result => (
              <Result key={result.videoId} result={result}/>
              ))}
      </div> */}
    </div>
  );
}

export default Results;

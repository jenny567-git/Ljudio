import React from "react";
//key: brosweId

function ArtistResult({ result }) {
  const imgUrl = result.thumbnails[1].url;
  return (
    <div className="result-artists">
      <a href={`/artists/` + result.browseId}>
        <img src={imgUrl} alt="" />
      </a>
      <p>{result.name}</p>
    </div>
  );
}

export default ArtistResult;

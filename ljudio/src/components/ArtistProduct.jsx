import React from "react";

function ArtistProduct({ result }) {
  return (
    <div className="product">
    <img src={result.thumbnails[0].url} alt="" />
      <p>
        {result.name} - {result.year}
      </p>
    </div>
  );
}

export default ArtistProduct;

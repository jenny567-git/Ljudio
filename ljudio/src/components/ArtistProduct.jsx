import React, {useState, useEffect} from "react";

function ArtistProduct({ result }) {
  const [image, setImage] = useState('')

  useEffect(() => {
      if(result.thumbnails){
          setImage(result.thumbnails[0].url)
      }    
  }, [])

  return (
    <div className="product">
    <img src={image} alt="" />
      <p>
        {result.name} - {result.year}
      </p>
    </div>
  );
}

export default ArtistProduct;

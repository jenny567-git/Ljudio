import React from 'react'
//key: brosweId

function ArtistResult({result}) {
    const imgUrl = result.thumbnails[1].url
    return (
        <div className="result-artists">
            <img src={imgUrl} alt="" />
            <p>{result.name}</p>
        </div>
    )
}

export default ArtistResult

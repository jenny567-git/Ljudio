import React from 'react'

function AlbumResult({result}) {
    const imgUrl = result.thumbnails[1].url
    return (
        <div className="result-albums">
            <img src={imgUrl} alt="" />
            <p>{result.name}</p>
        </div>
    )
}

export default AlbumResult

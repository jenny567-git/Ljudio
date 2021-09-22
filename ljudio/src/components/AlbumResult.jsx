import React, {useState, useEffect} from 'react'

function AlbumResult({result}) {
    const [image, setImage] = useState('')

    useEffect(() => {
        if(result.thumbnails){
            setImage(result.thumbnails[1].url)
        }    
    }, [])

    return (
        <div className="result-albums">
            <img src={image} alt="" />
            <p>{result.name}</p>
        </div>
    )
}

export default AlbumResult

import React from 'react'
import Player from './Player'

function Result({result}) {
    return (
        <div>
            {/* <p>hej</p> */}
            {/* <p>{result.type}</p> */}
            <Player id={result.videoId}/>
            <p>{result.videoId}</p>
        </div>
    )
}

export default Result

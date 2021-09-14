import React from 'react'

function Result({result}) {
    return (
        <div>
            <p>{result.title}</p>
            <p>{result.artist}</p>
        </div>
    )
}

export default Result

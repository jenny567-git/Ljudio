import React from 'react'
import Result from './Result'

function Results({searchResults}) {
    return (
        <div>
            {searchResults.map((result) => (
                <Result key={result.title} result={result}/>
            ))}
        </div>
    )
}

export default Results

import React from 'react'
import Result from './Result'

function Results({searchResults}) {
    return (
        <div>
            <p>Search results:</p>
            {Object.keys(searchResults).map((result) => (
                <Result key={result} result={result}/>
            ))}
            {/* {Array.from(searchResults).forEach((result) => (
                <Result key={result} result={result}/>
            ))} */}
        </div>
    )
}

export default Results

import React from 'react'
//filter out albums from type songs
// content": [
//     {
//         "type": "song",
//         "videoId": String,
//         "playlistId": String,
//         "name": String,
//         "artist": {
//             "name": String,
//             "browseId": String
//         },
//         "album": {
//             "name": String,
//             "browseId": String
//         },
//         "duration": Number,
//         "thumbnails": [
//             {
//                 "url": String,
//                 "width": Number,
//                 "height": Number
//             }
//         ],
//         "params": "wAEB"
//     }
function AlbumResult({result}) {
    const imgUrl = result.thumbnails[1].url
    return (
        <div className="result-albums">
            <img src={imgUrl} alt="" />
            <p>{result.name}</p>
        </div>
}

export default AlbumResult

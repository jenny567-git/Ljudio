import React, {useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { StoreContext } from "./../../utils/store";

function Artists() {
    const {isLoading: [isLoading, setLoading]} = useContext(StoreContext);
    const { artistResult: [getArtistResult, setArtistResult] } = useContext(StoreContext);
    const { artistId:[getArtistId, setArtistId] } = useContext(StoreContext);
    // const imgUrl = getArtistResult.thumbnails[1].url;
    let { id } = useParams()

    useEffect(() => {
        getArtist()
    }, []) //on mount

    const getArtist = async (e) => {
        console.log("in artist id", getArtistId);
        console.log('param id', id);
        setLoading(true)
        var response = await fetch(
          "https://yt-music-api.herokuapp.com/api/yt/artist/" + getArtistId
        );
        var callResult = await response.json();
        if (callResult) {
          console.log("artist result", callResult);
          setArtistResult(callResult)
          setLoading(false)
        }
      };

    function renderResult(){
        let comp
        console.log('artist:', getArtistResult);
        if(!isLoading[0]){
            comp = (
                <div>
                    {/* <img src={imgUrl} alt=""/> */}
                    <h3>{getArtistResult.name}</h3>
                    <p>{getArtistResult.description}</p>
                    {/* <p>{}</p> */}
                    {/* <p>{}</p> */}
                </div>
            )
        }
        return <>{comp}</>
    }

    return (
        <div className="container">
            {/* in artists */}
            {renderResult()}
        </div>
    )
}

export default Artists

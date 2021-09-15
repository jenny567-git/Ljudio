import React from "react";
// import { StoreContext } from "../../utils/store";

import Searchbar from "../Searchbar";
import Player from "../Player";
import FooterMusicPlayer from "../FooterMusicPlayer";
import Results from "../Results";

function Home({searchResults, search2, onString}) {
  // let videoId = 'dQw4w9WgXcQ';
  // window.player.loadVideoById(videoId);
  // const {results} = React.useContext(StoreContext)

  

  return (
    <div className="container">
      <Searchbar search2={search2} onString={onString}/>
      <Player/>
      {/* <p>Footer player</p>
      <FooterMusicPlayer/> */}
      <Results searchResults={searchResults}/>
    </div>
  );
}

export default Home;

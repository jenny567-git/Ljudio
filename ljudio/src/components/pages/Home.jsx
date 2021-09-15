import React, {useState} from "react";
import { StoreContext } from "../../utils/store";

import Searchbar from "../Searchbar";
import FooterMusicPlayer from "../FooterMusicPlayer";
import Results from "../Results";

function Home() {
  // let videoId = 'dQw4w9WgXcQ';
  // window.player.loadVideoById(videoId);
  // const {results} = React.useContext(StoreContext)

  // const results = [
  //   {
  //     title: 's1',
  //     artist: 'a1'
  //   },
  //   {
  //     title: 's2',
  //     artist: 'a2'
  //   },
  //   {
  //     title: 's3',
  //     artist: 'a3'
  //   }
  // ]
 
  return (
    <div className="container">
      <Searchbar />
      {/* <p>Footer player</p>
      <FooterMusicPlayer/> */}
      <Results />
    </div>
  );
}

export default Home;

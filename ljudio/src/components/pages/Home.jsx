import React, {useState, useContext} from "react";
import { StoreContext } from "../../utils/store";

import Searchbar from "../Searchbar";
import Results from "../Results";
import PlayerControls from "../PlayerControls";

function Home() {
  const { results } = useContext(StoreContext);
 
  return (
    <div className="container">
      
      <Searchbar />
      <Results />
    </div>
  );
}

export default Home;

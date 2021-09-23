import React from "react";

import Searchbar from "../Searchbar";
import Results from "../Results";

function Home() {
 
  return (
    <div className="container">
      
      <Searchbar />
      <Results />
    </div>
  );
}

export default Home;

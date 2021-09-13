import React from "react";

function Home() {
  return (
    <div className="searchContainer">
      <form>
        <input type="text" placeholder="Search for artists or tracks" />
        <button type="submit">
          <i class="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
}

export default Home;

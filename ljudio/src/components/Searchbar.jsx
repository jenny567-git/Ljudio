import React from "react";

function Searchbar() {
  return (
    <form>
      <input type="text" placeholder="Search for artists or tracks" />
      <button type="submit">
        <i class="fa fa-search"></i>
      </button>
    </form>
  );
}

export default Searchbar;

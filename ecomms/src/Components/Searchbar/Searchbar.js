import React from "react";
import "./searchbar.css";

function Searchbar() {
  return (
    <>
      <img id="searchImg" src="/Assets/search.png" />
      <input
        className="searchBar"
        type="search"
        placeholder="search for a product..."
      />
    </>
  );
}
export default Searchbar;

// import React, { useState } from "react";
import "./searchbar.css";

function Searchbar({ handleInput }) {

  function searchItem(event) {
    const searchValue = event.target.value;
    handleInput(searchValue);
  }

  return (
    <>
      <img id="searchImg" src="/Assets/search.png" alt="search icon" />
      <input
        className="searchBar"
        type="search"
        onChange={searchItem}
        placeholder="search for a product..."
      />
    </>
  );
}

export default Searchbar;
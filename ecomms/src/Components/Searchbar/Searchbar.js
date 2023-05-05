import React, { useState } from "react";
import "./searchbar.css";

function Searchbar({ ecomCat }) {
  const [foundItems, setFoundItems] = useState([]);

  function searchItem(event) {
    const searchValue = event.target.value;
    const searchResults = ecomCat.filter((item) => {
      return item.catagory.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFoundItems(searchResults);
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

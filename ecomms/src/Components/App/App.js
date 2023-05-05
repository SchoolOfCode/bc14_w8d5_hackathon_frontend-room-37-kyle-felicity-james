import "./App.css";
import Product from "../Product/Product";
import { useEffect, useState } from "react";
import Searchbar from "../Searchbar/Searchbar";

function App() {
  const [ecomCat, setEcomcat] = useState([]);
  const [foundItems, setFoundItems] = useState([]);

  useEffect(() => {
    async function fetchEcom() {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const ecomData = await response.json();
      setEcomcat(ecomData);
      setFoundItems(ecomData);
    }
    fetchEcom();
  }, []);

  function handleInput(event) {
    const searchResults = ecomCat.filter((item) => {
      return item.title.toLowerCase().includes(event.toLowerCase());
    });
    setFoundItems(searchResults);
  }

  return (
    <>
      <div className="navContainer">
        <h1 className="title">Fake Store Api App</h1>
        <img id="cartImg" src="/Assets/cart.png" alt="trolley" />
      </div>
      <div className="searchContainer">
        <Searchbar handleInput={handleInput} />
      </div>
      <div className="app-outer">
        <div className="App">
          <Product foundItems={foundItems} />
        </div>
      </div>
    </>
  );
}

export default App;

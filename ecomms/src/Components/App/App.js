import "./App.css";
import Product from "../Product/Product";
import { useEffect, useState } from "react";
import Searchbar from "../Searchbar/Searchbar";

function App() {
  // const category = "men's%20clothing";

  const [ecomCat, setEcomcat] = useState([]);

  useEffect(() => {
    async function fetchEcom() {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const ecomData = await response.json();
      setEcomcat(ecomData);
    }
    fetchEcom();
  }, []);

  console.log(ecomCat);

  return (
    <>
      <div className="navContainer">
        <h1 className="title">Fake Store Api App</h1>
        <img id="cartImg" src="/Assets/cart.png" />
      </div>
      <div className="searchContainer">
        <Searchbar />
      </div>
      <div className="App">
        <Product ecomCat={ecomCat} />
      </div>
    </>
  );
}

export default App;

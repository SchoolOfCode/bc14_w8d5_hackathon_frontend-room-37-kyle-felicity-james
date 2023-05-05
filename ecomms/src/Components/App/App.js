import "./App.css";
import Product from "../Product/Product";
import { useEffect, useState } from "react";
import Searchbar from "../Searchbar/Searchbar";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Cart from "../Cart/Cart";

function App() {
  const [ecomCat, setEcomcat] = useState([]);
  const [foundItems, setFoundItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);

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

  function handleAdd(item) {
    const newCartItems = [...cartItems, item];
    setCartItems(newCartItems);
  }

  return (
    <Router>
      <div className="navContainer">
        <h1 className="title">Fake Store Api App</h1>
        <div className="cartContainer">
          <Link to="../Cart/">
            <img id="cartImg" src="/Assets/cart.png" alt="trolley" />
          </Link>
          <p id="cartLength">{cartItems.length}</p>
          <p>£ {totalPrice.toFixed(2)}</p>
        </div>
      </div>
      <div className="searchContainer">
        <Searchbar handleInput={handleInput} />
      </div>
      <div className="app-outer">
        <div className="App">
          {
            <Product
              foundItems={foundItems}
              handleAddToCart={handleAdd}
              cartItems={cartItems}
            />
          }
          <div />
          <Routes>
            <Route
              path="../Cart/"
              element={
                <Outlet>
                  <Cart cartItems={cartItems} totalPrice={totalPrice} />
                </Outlet>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

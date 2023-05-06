import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../Cart/Cart";
import Searchbar from "../Searchbar/Searchbar";
import Product from "../Product/Product";

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

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  function handleClearCart() {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  }

  function handleAdd(item) {
    const newCartItems = [...cartItems, item];
    setCartItems(newCartItems);
  }

  return (
    <Routes>
      <Route
        path="/cart"
        element={
          <Cart cartItems={cartItems} handleClearCart={handleClearCart} />
        }
      />
      <Route
        path="/"
        element={
          <>
            <div className="navContainer">
              <h1 className="title">Fake Store Api App</h1>

              <div className="cartContainer">
                <a href="/cart">
                  <img id="cartImg" src="/Assets/cart.png" alt="trolley" />{" "}
                </a>
                <p id="cartLength">{cartItems.length}</p>
                <p>£ {totalPrice.toFixed(2)}</p>
              </div>
            </div>
            <div className="searchContainer">
              <Searchbar handleInput={handleInput} />
            </div>
            <div className="app-outer">
              <div className="App">
                <Product
                  foundItems={foundItems}
                  handleAddToCart={handleAdd}
                  cartItems={cartItems}
                />
              </div>
            </div>
          </>
        }
      />
    </Routes>
  );
}

export default App;

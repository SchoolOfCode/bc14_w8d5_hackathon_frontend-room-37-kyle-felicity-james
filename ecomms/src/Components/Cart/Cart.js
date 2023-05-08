import React from "react";
import "./cart.css";
import Button from "@mui/material/Button";
import Model from "../Modelobject/ModelObj";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";

function Cart({ cartItems, handleClearCart }) {
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const handleClearClick = () => {
    handleClearCart(); // Call the handleClearCart function when the button is clicked
  };

  return (
    <>
      <div className="cartNavBar">
        <a href="/">
          <img id="homeImg" src="/Assets/home.png" alt="home" />
        </a>
      </div>
      <div className="small-OverlayBox">
        <h2 id="carth2">Cart</h2>
        <div className="borderLine"></div>
        <ul className="gridItems">
          {cartItems.map((item) => (
            <div key={item.id}>
              {item.title}
              <img
                className="cartImg"
                src={item.image}
                alt={item.description}
              />
            </div>
          ))}
        </ul>
        <div className="borderLine"></div>
        <p>{cartItems.length} items</p>
        <p>£ {totalPrice.toFixed(2)}</p>
        <div className="clear-buyButtons">
          <Button variant="outlined" color="warning" onClick={handleClearClick}>
            Clear Cart
          </Button>
          <Button variant="contained" color="info">
            Buy Now
          </Button>
        </div>
        <div className="canvas-Container">
          <Canvas>
            <OrbitControls />
            <ambientLight intensity={2} />
            <spotLight position={[10, 15, 10]} angle={Math.PI / 3} />
            <pointLight position={[-10, -10, -10]} />
            <Model scale={[0.3, 0.3, 0.3]} />
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default Cart;

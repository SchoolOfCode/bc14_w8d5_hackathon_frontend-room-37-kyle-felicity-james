import React from "react";

function Cart({ cartItems, totalPrice }) {
  return (
    <div className="cartPopup">
      <h2>Cart</h2>
      {cartItems.map((item, key) => {
        return (
          <div className="cartContent" key={key}>
            <img className="ecomImg" src={item.image} alt={item.description} />
            <p className="prod-title">{item.title}</p>
            <p>£ {item.price.toFixed(2)}</p>
          </div>
        );
      })}
      <p>Total Price: £{totalPrice.toFixed(2)}</p>
    </div>
  );
}

export default Cart;

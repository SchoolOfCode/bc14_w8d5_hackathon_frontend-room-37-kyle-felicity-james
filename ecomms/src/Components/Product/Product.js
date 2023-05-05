import React from "react";
import "./product.css";

function Product({ foundItems, handleAddToCart }) {
  
  function handleAdd(item) {
    handleAddToCart(item);
  }

  return (
    <>
      {foundItems.map((item, key) => {
        return (
          <div className="productContent" key={key}>
            <img className="ecomImg" src={item.image} alt={item.description} />
            <p className="prod-title">{item.title}</p>
            <p>£ {item.price}</p>
            <button className="btn" onClick={() => handleAdd(item)}>
              Add to cart
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Product;

import React from "react";
import "./product.css";

function Product({ foundItems }) {
  if (foundItems) {
    return (
      <>
        {foundItems.map((item, key) => {
          return (
            <div className="productContent">
              <img
                className="ecomImg"
                src={item.image}
                alt={item.discription}
              />
              <p key={key.id} className="prod-title">
                {item.title}
              </p>
              <p>£ {item.price}</p>
              <button className="btn">Add to cart</button>
            </div>
          );
        })}
      </>
    );
  }
}

export default Product;

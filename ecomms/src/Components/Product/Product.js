import React from "react";

function Product({ foundItems }) {

  if(foundItems)
  {
    return (
        <>
      {foundItems.map((item, key) => {
        return (
          <div className="productContent">
            <img className="ecomImg" src={item.image} alt={item.discription} />
            <p key={key.id}>{item.title}</p>
            <p>£ {item.price}</p>
          </div>
        );
      })}
    </>
    )
  }
}

export default Product;
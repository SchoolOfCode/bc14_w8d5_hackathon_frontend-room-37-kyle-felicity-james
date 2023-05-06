// import Product from "../Product/Product";

function Cart({ totalPrice, cartItems, handleClearCart, item }) {
  return (
    <>
      <a href="/">
        Home
        <img id="cartImg" src="/Assets/home.png" alt="home" />
      </a>
      <div>
        <h2>Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title}
              <img src={item.image} alt={item.description} />
            </li>
          ))}
        </ul>
        <p>{cartItems.length} items</p>
        <p>£ {totalPrice}</p>
        <div className="clear-buyButtons">
          <button onClick={handleClearCart}>Clear Cart</button>
          <button>Buy Now</button>
        </div>
      </div>
    </>
  );
}

export default Cart;

function Cart({ totalPrice, cartItems, handleClearCart }) {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <p>{cartItems.length} items</p>
      <p>£ {totalPrice}</p>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
}

export default Cart;

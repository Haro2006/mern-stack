import React from "react";
const CartPage = ({ cart, removeFromCart }) => {
  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} style={{ marginBottom: "10px", borderBottom: "1px solid #ccc", paddingBottom: "10px", }} >
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price.toFixed(2)}</p>
            <button onClick={() => handleRemove(item.id)} style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>
              Remove
            </button>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
          Total Amount: ₹{totalAmount.toFixed(2)}
        </p>
      )}
    </div>
  );
};
export default CartPage;

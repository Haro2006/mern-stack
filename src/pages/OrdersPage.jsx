import React, { useState } from 'react';

const OrdersPage = () => {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 9.99 },
    { id: 3, name: 'Product 3', price: 29.99 },
  ]);

  const trackingSteps = [
    'Order received',
    'Processing',
    'Shipped',
    'In transit',
    'Delivered',
  ];

  const currentStep = 2; // 0 = received, 4 = delivered

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div style={{ padding: '2rem 3rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#6a1b9a' }}>🧾 Your Orders</h1>

      <h2 style={{ marginTop: '1rem' }}>🛍️ Products:</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: '10px' }}>
            <strong>{product.name}</strong> - ₹{product.price.toFixed(2)}{' '}
            <button
              onClick={() => handleAddToCart(product)}
              style={{
                marginLeft: '10px',
                padding: '5px 10px',
                backgroundColor: '#6a1b9a',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      <h2 style={{ marginTop: '2rem' }}>🛒 Cart:</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              {product.name} - ₹{product.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}

      {/* 📦 Order Status Section */}
      <h2 style={{ marginTop: '3rem' }}>📦 Order Status:</h2>
      <div
        style={{
          backgroundColor: '#f3e6ff',
          padding: '20px',
          borderRadius: '10px',
          maxWidth: '400px',
        }}
      >
        {trackingSteps.map((step, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              color: index <= currentStep ? '#000' : '#999',
            }}
          >
            <span style={{ marginRight: '10px', fontSize: '20px' }}>
              {index < currentStep
                ? '✅'
                : index === currentStep
                ? '🔄'
                : '⏳'}
            </span>
            <span>{index + 1}. {step}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;

import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;

import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product A', price: 10.0, description: 'This is product A' },
  { id: 2, name: 'Product B', price: 20.0, description: 'This is product B' },
  { id: 3, name: 'Product C', price: 30.0, description: 'This is product C' },
];

const ProductPage = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
};

export default ProductPage;

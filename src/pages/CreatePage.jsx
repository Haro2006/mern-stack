import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePage = ({ addProduct }) => {
  const [form, setForm] = useState({
    name: '',
    price: '',
    image: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name: form.name,
      price: parseFloat(form.price),
      image: form.image,
    };

    addProduct(newProduct);
    navigate('/'); // ✅ Redirect to homepage after adding
  };

  return (
    <div
      style={{
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',      // ✅ Center horizontally
        alignItems: 'flex-start',      // ✅ Top align
        minHeight: '100vh',            // ✅ Full height
        backgroundColor: '#fefefe',    // ✅ Light background (optional)
      }}
    >
      <div>
        <h1 style={{ marginBottom: '1rem', color: '#6a1b9a' }}>Add a New Product</h1>

        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '400px',
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
            required
            style={{
              padding: '10px',
              fontSize: '16px',
              borderRadius: '6px',
              border: '1px solid #ccc',
            }}
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            required
            style={{
              padding: '10px',
              fontSize: '16px',
              borderRadius: '6px',
              border: '1px solid #ccc',
            }}
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            required
            style={{
              padding: '10px',
              fontSize: '16px',
              borderRadius: '6px',
              border: '1px solid #ccc',
            }}
          />

          <button
            type="submit"
            style={{
              padding: '10px',
              backgroundColor: '#6a1b9a',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#4a0c6e')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#6a1b9a')}
          >
            ➕ Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;

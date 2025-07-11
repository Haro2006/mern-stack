import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const productsPerPage = 6;

const allProducts = [
  {
    id: 1,
    name: 'Silver Wear',
    price: 799,
    image: 'https://t4.ftcdn.net/jpg/01/10/57/99/240_F_110579977_fGNJd0OED8c1Ov1lonwr7gXxAzTpJQbo.jpg',
  },
  {
    id: 2,
    name: 'Violet Elsa',
    price: 2499,
    image: 'https://t3.ftcdn.net/jpg/01/02/94/10/240_F_102941002_kz2cfmLJccZQg2lpzKoWUAhUi1B86ADh.jpg',
  },
  {
    id: 3,
    name: 'Royal Red',
    price: 3999,
    image: 'https://t3.ftcdn.net/jpg/04/27/70/68/240_F_427706863_hi4N85labo3pmSc7AF3Dv4x3uAi2p8tM.jpg',
  },
  {
    id: 4,
    name: 'Princess Rose',
    price: 1599,
    image: 'https://t3.ftcdn.net/jpg/11/50/87/88/240_F_1150878893_uKOoxAYiibPLBrXforYSseTST1FoI8zC.jpg',
  },
  {
    id: 5,
    name: 'Awww Roses',
    price: 999,
    image: 'https://t3.ftcdn.net/jpg/06/33/38/00/240_F_633380048_ff8rheA5t2k1rtqaFOgMIAyBzwMfXRij.jpg',
  },
  {
    id: 6,
    name: 'Elegant Blue Whale',
    price: 599,
    image: 'https://t3.ftcdn.net/jpg/06/29/40/50/240_F_629405062_iyTbHuQG99Quoxriemgp1khzeuE5kWvx.jpg',
  },
  {
    id: 7,
    name: 'Wedding Vibes',
    price: 1299,
    image: 'https://t4.ftcdn.net/jpg/09/77/21/19/240_F_977211973_i2wv1vXOin8p26rq7Hg5ChVvUVqfZPJK.jpg',
  },
  {
    id: 8,
    name: 'Orange Trendiz',
    price: 499,
    image: 'https://t4.ftcdn.net/jpg/00/50/08/13/240_F_50081324_EIN1ywhdEERvhrWhsD6U1aBShjT3yPY2.jpg',
  },
  {
    id: 9,
    name: 'sparkle Rose',
    price: 499,
    image: 'https://t3.ftcdn.net/jpg/01/61/55/30/240_F_161553043_Dz2Z6mCpblNAhAUXf127GRroppqO8UOB.jpg',
  },
  {
    id: 10,
    name: 'Vacation Wear',
    price: 499,
    image: 'https://t4.ftcdn.net/jpg/03/08/82/61/240_F_308826188_8Yp6oJMwqbXSTFS28daOuClx9ikAqbeo.jpg',
  },
  {
    id: 11,
    name: 'Whity milk',
    price: 499,
    image: 'https://t4.ftcdn.net/jpg/07/12/59/23/240_F_712592360_y1RnpQQNdTxHZZOHfMatZ2iWreGDOBDA.jpg',
  },
  {
    id: 12,
    name: 'Summer Cuts',
    price: 499,
    image: 'https://t4.ftcdn.net/jpg/04/91/63/09/240_F_491630954_qWeK8yLBuuCOhtRKCPs37T5P6RiIKJ0P.jpg',
  },
  {
    id: 14,
    name: 'Beach Breeze',
    price: 1299,
    image: 'https://t4.ftcdn.net/jpg/09/22/42/89/240_F_922428954_pKGzruiedVCid7XCqcRZGYHv3YGx6tsj.jpg'
  },
  {
    id: 15,
    name: 'Festive Red',
    price: 899,
    image: 'https://t4.ftcdn.net/jpg/03/42/72/73/240_F_342727311_m4KE8WbLrjPDyq5KOGaefrW7K78F0gdc.jpg'
  },
  {
    id: 16,
    name: 'Evening Elegance',
    price: 2199,
    image: 'https://t3.ftcdn.net/jpg/01/66/69/72/240_F_166697255_GNWFhbiCYZ5QhY9Rjo0xBZ5ViUGCtnaz.jpg'
  },
  {
    id: 17,
    name: 'Coral Charm',
    price: 999,
    image: 'https://t4.ftcdn.net/jpg/00/42/45/81/240_F_42458152_snBEVz7B4qbS3AmbX8XkDCwxW8U8V4iD.jpg'
  },
  {
    id: 18,
    name: 'Lavender Love',
    price: 1499,
    image: 'https://t3.ftcdn.net/jpg/04/64/74/12/240_F_464741218_i2NHx3CV8mNNbxiDcfGBwyAosLGCrHk7.jpg'
  }
];

const HomePage = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [addedIds, setAddedIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const filteredProducts = allProducts.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()) );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const handleAddClick = (product) => {
    const isAdded = addedIds.includes(product.id);
    if (!isAdded) {
      addToCart(product);
      setAddedIds([...addedIds, product.id]);
    } else {
      setAddedIds(addedIds.filter(id => id !== product.id));
    }
  };

  return (
    <div style={{ padding: '1rem 2rem' }}>
      <h1 style={{ marginBottom: '20px' }}>Products</h1>

      <input
        type="text"
        placeholder="Discover elegance..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1);
        }}
        style={{
          marginBottom: '30px',
          padding: '12px 16px',
          width: '100%',
          maxWidth: '400px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          fontSize: '16px',
        }}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
        }}
      >
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => {
            const isAdded = addedIds.includes(product.id);
            return (
              <div
                key={product.id}
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '10px',
                  padding: '15px',
                  boxShadow: '0 2px 8px rgba(206, 43, 43, 0.05)',
                  backgroundColor: 'pink',
                  transition: 'transform 0.2s ease',
                  height: '350px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '6px' }}
                  />
                  <h2 style={{ fontSize: '16px', margin: '10px 0' }}>{product.name}</h2>
                </Link>
                <p style={{ fontWeight: 'bold', color: '#6a1b9a' }}>₹{product.price.toFixed(2)}</p>
                <button
                  onClick={() => handleAddClick(product)}
                  style={{
                    marginTop: '5px',
                    padding: '8px 12px',
                    backgroundColor: isAdded ? '#4caf50' : 'red',
                    color: isAdded ? 'white' : 'pink',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: '0.3s',
                  }}
                >
                  {isAdded ? 'Added ❤️' : 'Add to Cart'}
                </button>
              </div>
            );
          })
        ) : (
          <p>No products found.</p>
        )}
      </div>

      {/* Pagination */}
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            style={{
              margin: '0 6px',
              padding: '6px 12px',
              backgroundColor: currentPage === index + 1 ? '#6a1b9a' : '#ddd',
              color: currentPage === index + 1 ? 'white' : 'black',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

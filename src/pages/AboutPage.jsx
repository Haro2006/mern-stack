import React from 'react';

const AboutPage = () => {
  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '40px auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '36px',
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '20px',
        }}
      >
        About Us
      </h1>
      <p
        style={{
          fontSize: '18px',
          color: '#666',
          lineHeight: '1.6',
          marginBottom: '30px',
        }}
      >
        Experience the art of fashion with us! 🎨👗 We're a curated fashion store bringing high-end style to your doorstep! 💼👠
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginBottom: '20px',
        }}
      >
        <a
          href="https://www.instagram.com/the_fashion_studioooo/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'underline', color: '#337ab7' }}
        >
          🅾 Instagram
        </a>
        <a
          href="https://twitter.com/fashionstudio80?lang=ar"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'underline', color: '#337ab7' }}
        >
          🕊 <u>Twitter</u>
        </a>
        <a
          href="https://youtu.be/99jG-J6PKpQ"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'underline', color: '#337ab7' }}
        >
          ▷ <u>YouTube</u>
        </a>
        <a
          href="mailto:2316047@saec.ac.in"
          style={{ textDecoration: 'underline', color: '#337ab7' }}
        >
          ✉ <u>Email</u>
        </a>
      </div>
    </div>
  );
};

export default AboutPage;

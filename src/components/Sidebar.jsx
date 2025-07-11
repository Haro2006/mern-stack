import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 1001,
          background: '#fff',
          border: '1px solid #ccc',
          padding: '8px',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        =
      </button>
      <div
        style={{
          position: 'fixed',
          top: '70px',
          left: open ? '0' : '-220px',
          width: '200px',
          height: 'calc(100vh - 70px)',
          backgroundColor: '#fff',
          boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
          transition: 'left 0.3s ease',
          zIndex: 1000,
          padding: '20px',
        }}
      >
        {[
          ['👤 Profile', '/profile'],
          ['📝 Feedback', '/feedback'],
          ['ℹ About Us', '/about'],
           ['HOME', '/home'],
        ].map(([label, path]) => (
          <NavLink
            key={path}
            to={path}
            onClick={handleLinkClick}
            style={({ isActive }) => ({
              display: 'block',
              margin: '15px 0',
              color: isActive ? '#6a1b9a' : '#333',
              textDecoration: 'none',
              fontWeight: isActive ? 'bold' : 'normal',
            })}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Sidebar;



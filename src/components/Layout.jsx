import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = ({ cartCount }) => {
  return (
    <div>
      <Navbar cart={cartCount} />
      <Sidebar />
      <div style={{ paddingTop: '60px' }}>
        <Outlet /> {/* This renders the current route's component */}
      </div>
    </div>
  );
};

export default Layout;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import FeedbackPage from "./pages/FeedbackPage";
import OrdersPage from "./pages/OrdersPage";
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage";
import CreatePage from "./pages/CreatePage"; // ✅ If you're using this
import Layout from "./components/Layout"; // ✅ Import your layout
import AboutPage from "./pages/AboutPage";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  const removeFromCart  = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };


  return (
    
    <Router>
  <Routes>
    <Route element={<Layout cartCount={cart.length} />}>
      <Route path="/" element={<HomePage addToCart={addToCart} />} />
      <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/home" element={<HomePage addToCart={addToCart} />} />
    </Route>
  </Routes>
</Router>

  );
}

export default App;

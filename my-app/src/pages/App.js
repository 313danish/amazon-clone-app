import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './App.css';
import { Routes, Route,Link } from 'react-router';
import Home from './Home';
import Card from './Card';
import Products from './Products';
import Account from './Account';
import Orders from './Orders';
function App() {
  return (
     <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/products" element={<Products />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Card />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
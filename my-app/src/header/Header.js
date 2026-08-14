import React from 'react'
import './Header.css'
import { Link } from 'react-router'
import Cart from '../pages/Card'

function Header() {
  return (
    <div className="Header">
      <span>
        <Link to="/">All</Link>
      </span>
      <span>
        <Link to="/orders">Orders</Link>
      </span>
      <span>
        <Link to="/products">Products</Link>
      </span>
      <span>
        <Link to="/account">Account1</Link>
      </span>
      <span>
        <Link to="/account">Account2</Link>
      </span>
      <span>
        <Link to="/cart">Cart1</Link>
      </span>
       <span>
        <Link to="/cart">Cart2</Link>
      </span>
    </div>
  )
}

export default Header
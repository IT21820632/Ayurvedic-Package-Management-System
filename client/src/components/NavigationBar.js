
// NavigationBar.js

import React from "react";
import { Link } from "react-router-dom";
import "../css/NavigationBar.css";

function NavigationBar() {
  return (
    
    <nav className="sidebar">
    
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add Products</Link>
        </li>
        <li>
          <Link to="/customer-treatments">Customer Orders</Link>
        </li>
       
        {/* Add other links as needed */}
      </ul>
    </nav>
  );
}

export default NavigationBar;

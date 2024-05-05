
import React from "react";
import "../css/Homepage.css";
const HomePage = () => {


 

  return (
    <div className="home-container">
      
      <div className="home-header">
        <h1>SHOPPING EYE</h1>
       
      <div className="topnav">
        <a href="#">
          <li className="menu1">Home</li>
        </a>
        <a href="Treatments">
          <li className="menu1">Shoping List</li>
        </a>
        <a href="#">
          <li className="menu1">Categories</li>
        </a>
        <a href="#">
          <li className="menu1">About</li>
        </a>
        {/* Add your other menu items here */}
      </div>
   </div>
    </div>
  );
};

export default HomePage;

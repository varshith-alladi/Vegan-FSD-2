/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
//import "../styles/App.modules.css";
import {NavLink} from "react-router-dom";
import "./nav1.modules.css";
// import '../styles/navbar.modules.css';
function Navbar1() {
  return (
    <header>
      <div class="log">
        <img
          src="https://www.pngall.com/wp-content/uploads/8/Vegan-Logo-PNG.png"
          alt="logo"
        />
      </div>
      <div class="bar">
        <div class="NavBar">
          <div>
            <i class="fa-sharp fa-solid fa-house"></i>
          </div>
          <NavLink to="/Home">Home</NavLink>
        </div>
        <div class="NavBar">
          <div>
            <i class="fa-solid fa-cart-plus"></i>
          </div>
          <NavLink to="/product">Product</NavLink>
        </div>
        <div class="NavBar">
          <div>
            <i class="fa-solid fa-clipboard-question"></i>
          </div>
          <NavLink to="/Faq">Faq</NavLink>
        </div>
        <div class="NavBar">
          <div>
            <i class="fa-solid fa-file-lines"></i>
          </div>
          <a href="/aboutus">ABOUT</a>
        </div>
        <div class="NavBar">
          <div>
            <i class="fa-solid fa-phone"></i>
          </div>
          <a href="/contactus">CONTACT US</a>
        </div>

        <div class="NavBar">
          <div>
            <i class="fa-solid fa-user"></i>
          </div>
          <a href="/user-profile">PROFILE</a>
        </div>
        <div class="NavBar">
          <div>
          <i class="fa-solid fa-align-center"></i>
        </div>
        <NavLink to="/recipe">Recipies</NavLink>
        </div>
        <div class="NavBar">
          <div>
          <i class="fa-solid fa-align-center"></i>
        </div>
        <NavLink to="/cart">Cart</NavLink>
        </div>
</div>
      <div class="cartt">
        <div>
          <i class="fa-solid fa-magnifying-glass"></i>
          <p>search</p>
        </div>
        <div>
          <span>|</span>
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    </header>
  );
}
export default Navbar1;

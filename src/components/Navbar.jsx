import React from "react";
import '../styles/navbar.css'
import logo from '../assets/logo.jpg'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">Acheter</a>
        </li>
        <li>
          <a href="/">Press On Nails</a>
        </li>
        <li>
          <a href="/">Lips booster crème</a>
        </li>
        <li>
          <a href="/">blog</a>
        </li>
        <li>
          <a href="/">À propos</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        {/* <li>
          <a href="/">Connexion</a>
        </li> */}
      </ul>
    </nav>
  );
}

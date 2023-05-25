import React, { useState } from "react";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white">
      <div className="flex items-center">
        <img src={logo} alt="Logo" style={{ height: "9vh" }} />
      </div>
      <div className="md:hidden">
        {/* Affiche le menu burger sur les petits écrans */}
        <button
          type="button"
          className="text-white hover:text-gray-300 focus:outline-none"
          onClick={handleMenuToggle}
        >
          <svg
            className="h-6 w-6 fill-current stroke-black"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                d="M6 6L18 18M6 18L18 6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M3 12h18M3 6h18M3 18h18"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
      </div>
      <ul
        className={`md:flex ${
          isMenuOpen ? "flex" : "hidden"
        } flex-col md:flex-row md:space-x-4 mt-4 md:mt-0 `}
        style={{position: 'relative', left: '0.5rem', fontSize: '14px'}}
      >
        <li>
          <a href="/" className="text-yellow-600 hover:text-yellow-300">
            Acheter
          </a>
        </li>
        <li>
          <a href="/" className="text-yellow-600 hover:text-yellow-900">
            Press On Nails
          </a>
        </li>
        <li>
          <a href="/" className="text-yellow-600 hover:text-yellow-900">
            Lips booster crème
          </a>
        </li>
        <li>
          <a href="/" className="text-yellow-600 hover:text-yellow-900">
            Blog
          </a>
        </li>
        <li>
          <a href="/" className="text-yellow-600 hover:text-yellow-900">
            À propos
          </a>
        </li>
        <li>
          <a href="/" className="text-yellow-600 hover:text-yellow-900">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white">
      <Link to={"/"} className="flex items-center">
        <img src={logo} alt="Logo" style={{ height: "9vh" }} />
      </Link>
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
        style={{ position: "relative", left: "0.5rem", fontSize: "14px" }}
      >
        <li>
          <Link
            to={"/boutique"}
            className="text-yellow-600 hover:text-yellow-900"
          >
            Acheter
          </Link>
        </li>
        <li>
          <Link
            className="text-yellow-600 hover:text-yellow-900"
            translate="no"
          >
            Press On Nails
          </Link>
        </li>
        <li>
          <Link className="text-yellow-600 hover:text-yellow-900">
            <span translate="no">Lips booster</span>{" "} crème
          </Link>
        </li>
        <li>
          <Link className="text-yellow-600 hover:text-yellow-900">Blog</Link>
        </li>
        <li>
          <Link className="text-yellow-600 hover:text-yellow-900">
            À propos
          </Link>
        </li>
        <li>
          <Link className="text-yellow-600 hover:text-yellow-900">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

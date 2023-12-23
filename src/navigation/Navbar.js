// Navbar.js
import React from "react";
import { Link } from "react-router-dom"; // Assuming you'll use react-router for navigation
import { CartState } from "../Context";
import styles from "./navbar.module.css"; // Import the CSS module

const Navbar = () => {
  const { cart } = CartState();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M21 15s-2-4-5-4H7L4 4" />
            </svg>
            ({cart.length})
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

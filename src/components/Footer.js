import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <p>&copy; 2025 Little Lemon</p>
      </div>
      <nav className="footer-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ toggleCart }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#home"><h1>MOBILESTORAGE</h1></a>
      <ul className='navLinks'>
        <li><a href="#store">Store</a></li>
        <li><button onClick={toggleCart} className="cart-button">Cart</button></li>
        <li><a href="#">Profile</a></li>
      </ul>
      <div className='navLogin'>
        <a href="#">Login</a>
        <a href="#">Start</a>
      </div>
    </nav>
  );
};

export default Navbar;
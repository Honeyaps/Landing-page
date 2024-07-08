import React, { useState, useEffect } from 'react';
import './navbar.css';
import { RiMenu4Line } from "react-icons/ri";
import Coinlogo from './Coinlogo.json';
import Lottie from 'lottie-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="navbar-brand"><Lottie animationData={Coinlogo} style={{ width: '170px', height: '170px' }}/></a>
      <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <li><button className="dnld_btn">Download</button></li>
        </ul>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <RiMenu4Line className='menu_btn'/>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import myLogo from '../assets/images/caleb-yinusa-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <img src={myLogo} alt="Profile" className="myLogo" />
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <a rel="noopener noreferrer" href="/" className="nav-button">
          Home
        </a>
        <a rel="noopener noreferrer" href="/Expertise" className="nav-button">
          Expertise
        </a>
        <a rel="noopener noreferrer" href="/Projects" className="nav-button">
          Projects
        </a>
        <a rel="noopener noreferrer" href="/Reachout" className="nav-button">
          Reachout
        </a>
      </div>
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/caleb-yinusa-3ab3442b4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} style={{ color: '#feb100', fontSize: '40px' }} />
        </a>
        <a
          href="https://x.com/bigdevsircole?t=mvJOSu6ODSQGLq4C_rmCHA&s=08"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faXTwitter} style={{ color: '#feb100', fontSize: '40px' }} />
        </a>
        <a
          href="https://wa.me/2348180402086"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} style={{ color: '#feb100', fontSize: '40px' }} />
        </a>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
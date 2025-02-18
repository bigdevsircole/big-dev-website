import myLogo from '../assets/images/caleb-yinusa-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <img src={myLogo} alt="Profile" className="myLogo" />
      <div className="nav-links">
        <a rel='noopener noreferrer' href="/" className="nav-button">Home</a>

        <a rel='noopener noreferrer' href="/Expertise" className="nav-button">Expertise</a>

        <a rel='noopener noreferrer' href="/Projects" className="nav-button">Projects</a>

        <a rel='noopener noreferrer' href="/Reachout" className="nav-button">Reachout</a>

        <a rel='noopener noreferrer' href="/Githubuser" className="nav-button">Github User</a>
      </div>

      <div className="icons">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} style={{ color: '#feb100', fontSize: '40px' }} />

        </a>

        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faXTwitter} style={{ color: '#feb100', fontSize: '40px' }} />
        </a>
        
        <a href="https://wa.me/2348180402086" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} style={{ color: '#feb100', fontSize: '40px' }} />

        </a>
      </div>

    </nav>
  );
};

export default Navbar;

import { useState } from 'react';
import './Navbar.css';
import { FaDoorOpen } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav style={{ background: '#F8F8F8', color: 'black' }}>
      <div className="navbar-container">
        <div className="logo-container">
          <img src="src/assets/logo.png" alt="Logo" className="logo" />
        </div>
        <div className="menu-container">
          <button className="menu-button hover:text-orange-500">Home</button>
          <button className="menu-button flex items-center hover:text-orange-500">
            <FaDoorOpen className="mr-2" /> Login
          </button>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>
      {menuOpen && (
        <div className="menu-mobile">
          <button className="menu-button hover:text-orange-500">Home</button>
          <button className="menu-button flex items-center hover:text-orange-500">
            <FaDoorOpen className="mr-2" /> Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

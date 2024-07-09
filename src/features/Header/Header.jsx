import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/image/logo.png';
import phoneIcon from '../../assets/svg/phone.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white text-black py-2 px-4 md:px-8">
      <div className="container mx-auto">
        <nav className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="flex items-center justify-between">
            <NavLink to="/">
              <img className="w-20 h-auto" src={logo} alt="Logo" />
            </NavLink>
            <button
              className={`text-xl md:hidden focus:outline-none ${menuOpen ? 'text-blue-500' : 'text-black'}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              меню
            </button>
          </div>
          <div className={`flex flex-col md:flex-row md:items-center md:space-x-4 ${menuOpen ? 'block' : 'hidden'} md:flex`}>
            <NavLink to="/service" className="text-black font-semibold py-1 hover:underline">
              Our Service
            </NavLink>
            <NavLink to="/about" className="text-black font-semibold py-1 hover:underline">
              About
            </NavLink>
            <NavLink to="/blog" className="text-black font-semibold py-1 hover:underline">
              Blog & News
            </NavLink>
            <NavLink to="/contact" className="text-black font-semibold py-1 hover:underline">
              Contact
            </NavLink>
            <NavLink to="/account" className="text-black font-semibold py-1 hover:underline">
              Account
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

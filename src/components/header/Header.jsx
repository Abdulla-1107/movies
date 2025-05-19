import React, { useState } from 'react';
import logo from "@/assets/logo.svg";
import { NavLink } from 'react-router-dom';
import { IoSearch, IoHome, IoBookmarkOutline, IoMenu, IoClose } from "react-icons/io5";
import { BiMoviePlay } from "react-icons/bi";

const Header = () => {
  const [language, setLanguage] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const navLinkClass = ({ isActive }) =>
    `flex flex-col items-center header-link ${isActive ? 'active' : ''}`;

  return (
    <header className="text-white bg-black py-4 px-5 flex justify-between items-center relative">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-28" />
      </div>

      <nav className="hidden md:flex gap-10 items-center">
        <NavLink to="/" className={navLinkClass}>
          <IoHome className='text-2xl' />
          <span>Home</span>
        </NavLink>
        <NavLink to="/movies" className={navLinkClass}>
          <BiMoviePlay className='text-2xl' />
          <span>Movies</span>
        </NavLink>
        <NavLink to="/saved" className={navLinkClass}>
          <IoBookmarkOutline className='text-2xl' />
          <span>Saved</span>
        </NavLink>
        <NavLink to="/search" className={navLinkClass}>
          <IoSearch className='text-2xl' />
          <span>Search</span>
        </NavLink>
      </nav>

      <div className="hidden md:flex items-center gap-4">
        <select
          value={language}
          onChange={handleLanguageChange}
          className='rounded-[10px] py-2 px-2.5 bg-gray-800 text-white'
        >
          <option value="en">En</option>
          <option value="ru">Ru</option>
        </select>
        <button className='bg-[#C61F1F] py-2 px-7 rounded-[5px]'>Login</button>
      </div>

      <button onClick={toggleMenu} className="md:hidden text-white text-3xl z-50">
        {isMenuOpen ? <IoClose /> : <IoMenu />}
      </button>

      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black/95 flex flex-col items-center justify-center gap-8 z-40 transition-all duration-300">
          <NavLink to="/" className="text-xl" onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/movies" className="text-xl" onClick={toggleMenu}>Movies</NavLink>
          <NavLink to="/saved" className="text-xl" onClick={toggleMenu}>Saved</NavLink>
          <NavLink to="/search" className="text-xl" onClick={toggleMenu}>Search</NavLink>
          <select
            value={language}
            onChange={handleLanguageChange}
            className='rounded-[10px] py-2 px-4 bg-gray-800 text-white'
          >
            <option value="en">En</option>
            <option value="ru">Ru</option>
          </select>
          <button className='bg-[#C61F1F] py-2 px-10 rounded-[5px]'>Login</button>
        </div>
      )}
    </header>
  );
};

export default Header;

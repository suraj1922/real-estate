import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useDarkMode } from './DarkModeContext';
import { FaBars, FaPhoneAlt, FaUserCircle } from 'react-icons/fa';
import logo from '../assets/images/logo.png';

const Header = () => {
  const { darkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    {
      link: 'Home',
      path: 'home'
    },
    {
      link: 'About',
      path: 'about'
    },
    {
      link: 'Properties',
      path: 'properties'
    },
    {
      link: 'Services',
      path: 'services'
    },
    {
      link: 'Testimonials',
      path: 'testimonials'
    },
    {
      link: 'Contact',
      path: 'contact'
    },
  ];

  return (
    <nav>
      <div className={`${darkMode ? 'dark bg-black' : 'light bg-[#f3f3f3]'} flex justify-between items-center gap-2 lg:px-6 px-4 sticky top-0 z-30`}>
        <div id='logo'>
          <img src={logo} alt="" className={`lg:w-[150px] w-[120px] ${darkMode ? 'filter invert' : ''}`} />
        </div>
        <ul className='lg:flex justify-center items-center gap-8 hidden'>
          {navItems.map(({ link, path }) => (
            <Link key={path} className={`text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 ${darkMode ? 'dark:text-white' : ''} rounded-lg hover:bg-red-600 hover:text-white`} to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
          ))}
        </ul>
        
        {/* Mobile menu */}
        <div className='flex justify-center items-center lg:hidden' onClick={toggleMenu}>
          <div>
            {isMenuOpen ? <FaBars className={`text-black ${darkMode ? 'dark:text-white' : ''} text-2xl cursor-pointer`} /> : <FaBars className={`text-black ${darkMode ? 'dark:text-white' : ''} text-2xl cursor-pointer`} />}
          </div>
        </div>
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-gray-800 p-4 absolute top-[65px] left-0`} onClick={closeMenu}>
          <ul className='flex flex-col justify-center items-center gap-2 w-full'>
            {navItems.map(({ link, path }) => (
              <Link key={path} className='text-white uppercase font-semibold cursor-pointer rounded-lg hover:bg-red-600 hover:text-black w-full text-center' spy={true} offset={-100} smooth={true}>{link}</Link>
            ))}
          </ul>
        </div>
        
        <div className='flex justify-center items-center lg:gap-8 gap-2'>
          <FaPhoneAlt className='size-6 text-red-600' />
          <h1 className={`lg:text-xl text-lg text-black ${darkMode ? 'dark:text-white' : ''} font-semibold`}>839 338 9394</h1>
          </div>
        <FaUserCircle className='size-6 text-red-600'/>
      </div>
    </nav>
  );
};

export default Header;

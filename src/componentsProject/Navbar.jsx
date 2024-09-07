import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Use react-router-dom Link
import Logo from '../assets/logoMain.png';
import { MenuIcon, XIcon } from 'lucide-react';
import { IoLogOut } from "react-icons/io5";

const Navbar = ({ user_details, set_token }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    set_token()
    localStorage.clear()
  }

  // NavItems Array
  const navItems = [
    { link: 'Home', path: '/' },
    { link: 'About', path: '/aboutus' },
    { link: 'Features', path: '/features' },
    // { link: 'Blog', path: '/blog' },
    { link: 'Pricing', path: '/pricing' },
    { link: 'Contact', path: '/contact' },
  ];

  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
      <nav className={`py-1.5 lg:px-14 px-4 ${isSticky ? 'sticky top-0 left-0 right-0 border bg-white duration-300' : ''}`}>
        <div className='flex justify-between items-center text-base gap-8'>
          <a href='/' className='text-2xl font-semibold flex items-center space-x-3'>
            <img src={Logo} alt='' className='w-32 inline-block items-center' />
            {/* <span className='text-[#263238]'>Flyttegutta</span> */}
          </a>

          {/* Nav Items for large devices */}
          <ul className='md:flex space-x-10 hidden'>
            {navItems.map(({ link, path }) =>
              path.startsWith('#') ? (
                <a
                  href={path}
                  key={path}
                  className='block text-base text-gray-900 duration-300 hover:text-brandPrimary hover:scale-105 cursor-pointer'
                >
                  {link}
                </a>
              ) : (
                <Link
                  to={path}
                  key={path}
                  className='block text-base text-gray-900 duration-300 hover:text-brandPrimary hover:scale-105 cursor-pointer'
                >
                  {link}
                </Link>
              )
            )}
          </ul>

          {/* Button for larger devices */}
          {!user_details ? (
            <div className='space-x-2 hidden lg:flex items-center'>
              <a href='/login' className='hidden lg:flex items-center duration-300 text-brandPrimary hover:text-neutralDGrey border border-transparent hover:border-neutralDGrey px-4 py-2 rounded'>
                Login
              </a>
              <Link to="/pricing">
                <button className='bg-brandPrimary text-white px-4 py-2 transition-all duration-300 rounded hover:bg-neutralDGrey'>Sign up</button>
              </Link>
            </div>
          ) : (
            <div className='flex flex-row justify-end items-center gap-4'>
              <p>Welcome back, {user_details?.Name.split(' ')[0]}!</p>
              <IoLogOut
                className='text-black duration-300 hover:text-red-600 w-7 h-7 hover:scale-105 cursor-pointer'
                onClick={handleLogout}
              />
            </div>
          )
          }

          {/* Menu button for only mobile devices */}
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-neutralDGrey focus:outline-none focus:text-gray-500'>
              {isMenuOpen ? <XIcon className='h-6 w-6' /> : <MenuIcon className='h-6 w-6' />}
            </button>
          </div>
        </div>

        {/* Nav Items for Mobile Devices */}
        <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? 'block fixed top-0 left-0 right-0' : 'hidden'}`}>
          {navItems.map(({ link, path }) =>
            path.startsWith('#') ? (
              <a
                href={path}
                key={path}
                className='block text-base text-white duration-300 hover:text-brandPrimary hover:scale-105 cursor-pointer first:font-medium'
              >
                {link}
              </a>
            ) : (
              <Link
                to={path}
                key={path}
                className='block text-base text-white duration-300 hover:text-brandPrimary hover:scale-105 cursor-pointer first:font-medium'
              >
                {link}
              </Link>
            )
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

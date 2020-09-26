import React, { useState } from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

const NavItem = ({ to, label }) => {
  return (
    <div className='block m-0 lg:inline-block h-full'>
    <Link
      to={to}
      className='flex items-center p-3 m-0 h-full text-primary-700 hover:shadow-inner'
    >
      {label}
    </Link>
    </div>
  );
};

const Logo = () => {
  return (
    <div className='flex items-center flex-shrink-0 text-primary-700 mr-6'>
      <Link to='/' className='font-title p-2 text-3xl sm:text-xl md:text-2xl lg:text-3xl' title='Logo'>
        TravelMed
      </Link>
    </div>
  );
};

const Navbar = () => {
  const [hidden, setHidden] = useState(true);

  const toggleHamburger = () => {
    // toggle the active boolean in the state
    setHidden(!hidden);
  };

  return (
    <nav className='flex items-stretch justify-between flex-wrap bg-white'>
      <Logo />
      <div className='flex items-center lg:hidden'>
        <button
          className='flex items-center px-3 py-2 mr-2 border rounded text-primary-700 border-primary-700 outline-none'
          onClick={() => toggleHamburger()}
        >
          <svg className='fill-current h-4 w-4' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      <div className={`w-full ${hidden?'hidden':'block'} items-stretch flex-grow lg:w-auto lg:flex`}>
        <div className='text-lg lg:flex-grow items-stretch'>
          <NavItem to='/info' label='Informationen' />
          <NavItem to='/info/disease' label='Krankheiten' />
          <NavItem to='/info/vaccine' label='Impfungen' />
          <NavItem to='/blog' label='News' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

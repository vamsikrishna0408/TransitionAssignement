import React from 'react';
import Navbar from './Navbar';
import Userheader from './Userheader';

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <Userheader />
    </header>
  );
};

export default Header;

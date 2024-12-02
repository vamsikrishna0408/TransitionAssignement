import React from 'react';
import './Navbar.css';
import { IoHomeOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Navbar = () => {
  return (
    <header className="top-navigation">
      <div className="profile">
        <h2>Chat / Feed chat</h2>
      </div>
      <nav>
        <ul className='nav-menu-list'>
          <li>
          <IoHomeOutline  className='icons'/>
          </li>
          <li><button className='hod'>Process Owner HOD</button></li>
          <li><button className='admin-btn'>Admin</button></li>
          <li className='nav-profile-name'>
            Palak Bansal
          </li>
          <li>
          <img src="https://as1.ftcdn.net/v2/jpg/03/49/21/76/1000_F_349217639_OHR2Tgflrt0n9eMqpbiaUVbqXJ92v1PA.jpg" alt="Profile" className="profile-pic" />
          </li>
          <li><CiSettings className='icons' /></li>
          <li>
          <FaArrowRightFromBracket className='icons' />
          </li>
          <li>Logout</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
import React from 'react';
import './Sidebar.css'
import { TbFileSearch} from "react-icons/tb";
import { RiFileList3Line } from "react-icons/ri";
import { FaLink } from "react-icons/fa6";
import { FaChevronRight,FaNetworkWired } from "react-icons/fa";
import { FiUsers, FiUser,FiGift } from "react-icons/fi";
import { RxCube } from "react-icons/rx";
import { Bs1Circle,Bs2Circle } from "react-icons/bs";
import { SlWrench } from "react-icons/sl";
import { PiStarFourLight } from "react-icons/pi";

const Sidebar = () => {
  return (
    <aside className="left-sidebar">
      <div  className='sidebar-container'>
        <img className='logo' src ="https://static.wixstatic.com/media/5ce010_4a8fe93d93e34469a64848088d346a38~mv2.png/v1/fill/w_308,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo2.png" alt ="logo"/>
      <ul className='sidebar-list'>
        <li className='list-item'> 
            <TbFileSearch className='icons'/>
            Internal Audit
            <FaChevronRight className='arrow-icon' />
        </li>
        <li className='list-item'>
          <RiFileList3Line className='icons' />
          UAT Testing
          </li>
        <li className='list-item'>
          <FaLink className='icons' />
          Intract 
        </li>
        <li className='list-item'>
          <FiUsers  className='icons'/>
           Queue
        </li>
        <li className='list-item'>
          <FaNetworkWired className='icons' />
          Workflow
        </li>
        <li className='list-item'>
          <FiUser className='icons' />
           Admin
        </li>
        <li className='list-item'>
          <RxCube  className='icons'/>
          Asset
        </li>
        <li className='list-item'>
          <Bs1Circle  className='icons'/>
          Option One
        </li>
        <li className='list-item'>
          <Bs2Circle  className='icons'/>
          Option Two
          </li>
        <li className='list-item'>
          <SlWrench  className='icons'/>
          All Accessories
          </li>
        <li className='list-item'> 
            <TbFileSearch className='icons'/>
            Internal Audit
            <FaChevronRight className='arrow-icon' />
        </li>
        <li className='list-item'>
           <PiStarFourLight className='icons' />
           Decorating
           <FaChevronRight className='arrow-icon' />
          </li>
        <li className='list-item'>
           <FiGift className='icons' />
           Presenting
        </li>
      </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
import React from 'react';
import './Userheader.css';
import { TbMessageCircleUser } from "react-icons/tb";
import { FaChevronRight } from "react-icons/fa";

const Userheader = () => {
  return (
    <div className="user-header">
        <div className="tab">
          <button className='name-btn'>
            CB
          </button>
          Cheyenne Bergson
          </div>
        <div className="tab">
         <button className='name-btn'>
            CB
          </button>
          Jonathan Higgins
          </div>
        <div className="tab">
         <button className='name-btn'>
            CB
          </button>
          Capt. Trunk
          </div>
        <div className="tab active">
          <button className='name-btn'>
            CB
          </button>
          Hannibal Smith
          </div>
          <div className="tab">
         <button className='name-btn'>
            CB
          </button>
          Capt. Trunk
          </div>
        <div className="tab">
          <button className='name-btn'>
            CB
          </button>
          Hannibal Smi... <button>2</button>
          </div>
          <div className='custom-tab'>
            <button className='message-icon-btn'>
            <TbMessageCircleUser />
            </button>
            Messaging
            <FaChevronRight />
          </div>
      </div>
  );
};

export default Userheader;

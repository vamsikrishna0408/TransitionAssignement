import React, { useState } from 'react';
import './Conversation.css';
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
import { PiArrowFatLinesRight } from "react-icons/pi";
import { ImAttachment } from "react-icons/im";

const Conversation = () => {

  return (
    <section className="conversation-interface">
      <div className="tabs">
        <button className="tab highlate">Conversation</button>
        <button className="tab">Address Update <RxCross2 className='icon' /></button>
        <button className="tab">Fee Reversal <RxCross2 className='icon' /></button>
        <button className="tab">Ret</button>
        <button className="escalate-button">Escalate</button>
      </div>
      <div className="conversation-tab active">
      <div className="message-body">
            Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet. Egestas mattis pellentesque nibh sed malesuada dolor eget ipsum. Malesuada nam morbi id arcu volutpat arcu.
          </div>
        <div className="message">
          <div className="message-header">
            <span className="user-initials">RA</span>
            <div className='name-time-container'>
            <span className="user-name">Rachel Adams</span>
            <span className="timestamp">9:08 PM - Received By WhatsApp <FaCheck  className='check-icon'/></span>
            </div>
          </div>
          <div className="message-body">
            Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet. Egestas mattis pellentesque nibh sed malesuada dolor eget ipsum. Malesuada nam morbi id arcu volutpat arcu.
          </div>
        </div>
        <div className="message">
          <div className="message-header">
            <span className="user-initials">HK</span>
            <div className='name-time-container'>
            <span className="user-name">You</span>
            <span className="timestamp">27 Jul, 2024 - Sent By WhatsApp  <FaCheck  className='check-icon'/></span>
          </div>
            </div>
           
          <div className="message-body">
            Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet. Egestas mattis pellentesque nibh sed malesuada dolor eget ipsum. Malesuada nam morbi id arcu volutpat arcu.
          </div>
        </div>
      </div>
      <hr/>
      <div className="message-input">
        <div className='checkbox-container'>
        <div>
        <input type='Checkbox'id = 'sms' checked/>
        <label for = 'sms' className='label checked'>SMS</label>
        </div>
        <div>
        <input type='Checkbox'id = 'whatsapp'/>
        <label for = 'whatsapp' className='label'>WhatsApp</label>
        </div>
        <div>
        <input type='Checkbox'id = 'email' checked/>
        <label for = 'email' className='label checked'>Email</label>
        </div>
        </div>
        <div className='input-button-container'>
        <input 
          type="text" 
          className='input-element' 
          placeholder="Type a message..." 
        />
          <ImAttachment className='attach-icon' />
          <button className="send-button"><PiArrowFatLinesRight  className='icon'/> Send </button>
        </div>
       
      </div>
    </section>
  );
};

export default Conversation;

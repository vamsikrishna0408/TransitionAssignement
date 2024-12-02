import React from 'react';
import './AskCatura.css';
import { FaRegEnvelope } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { TbArrowBigRightLine } from "react-icons/tb";

const AskCatura = () => {
  return (
    <header className="ask-catura">
      <div className="header-container">
        <h1 className='heading'>Ask Catura</h1>
          <p className='message-icon-container'> <FaRegEnvelope className='icon' />WhatsApp <FaCaretDown className='downArrow-icon' /></p>
          <p className='message-icon-container'> <FaRegEnvelope className='icon' />Greetings <FaCaretDown className='downArrow-icon'/></p>
      </div>
      <section className="greeting-template">
        <div className="template-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
          <div className='template-btn-container'>
            <button className="template-buttons">Copy to Send</button>
            <button className="template-buttons">Preview</button>
          </div>
        </div>
        <div className='input-btn-container'>
        <input type="text" placeholder="Type a message..." className='input-elememt' />
        <button className="send-button"><TbArrowBigRightLine className='arrow-icon' /></button>
        </div>
      </section>
    </header>
  );
};

export default AskCatura;

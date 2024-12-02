import React from 'react';
import './CustomerProfile.css';
import { CiLocationOn, CiCirclePlus } from "react-icons/ci";
import { BiPieChartAlt } from "react-icons/bi";

const CustomerProfile = () => {
  return (
    <section className="customer-profile">
      <div className="profile-header">
        <button className='profile-logo'>CB</button>
        <div>
        <h2>Hannibal Smith</h2>
        <p> <CiLocationOn /> 1 Market Street, San Francisco, CA 94105</p>
        </div>
      </div>
      <div className='profile-card'>
      <div className="profile-item">
          <span className="label">Customer ID:</span>
          <span className="value">12345</span>
        </div>
        <hr/>
        <div className="profile-item">
          <span className="label">Email Address:</span>
          <span className="value">rachel@sample.com</span>
        </div>
        <hr/>
        <div className="profile-item">
          <span className="label">Phone Number:</span>
          <span className="value">8051288905</span>
        </div>
        <button className='add-btn'> <CiCirclePlus  className='icons'/>Add</button>
      </div>
      <div className='profile-card'>
      <div className="profile-details">
        <div className="profile-item">
          <span className="label">Loyalty Tier:</span>
          <span className="value">Silver</span>
        </div>
        <hr/>
        <div className="profile-item">
          <span className="label">Segment:</span>
          <span className="value">Sleepy Customer</span>
        </div>
        <button className='add-btn'> <CiCirclePlus  className='icons'/>Add</button>
      </div>
      </div>
      <div className='profile-card'>
      <div className="profile-item">
          <span className="label">Lifetime Value:</span>
          <span className="value">$1M</span>
        </div>
        <hr/>
        <div className="profile-item">
          <span className="label">Propensity to Purchase:</span>
          <span className="value icon-75"> <BiPieChartAlt  className='percentage-icon icon-75'/>75%</span>
        </div>
        <button className='add-btn'> <CiCirclePlus  className='icons'/>Add</button>
      </div>
      <div className='profile-card'>
        <div className="profile-item">
          <span className="label">Engagement Score:</span>
          <span className="value icon-80"> <BiPieChartAlt  className='percentage-icon icon-80'/>80%</span>
        </div>
        <button className='add-btn'> <CiCirclePlus  className='icons'/>Add</button>
        </div>
      <div className="profile-actions">
        <button className='AssignAgent-btn'>Assign other Agent</button>
        <button className='Addwidget-btn'>Add New Widget</button>
      </div>
    </section>
  );
};

export default CustomerProfile;

import React from 'react';
import './ActionLauncher.css';
import { GrAddCircle } from "react-icons/gr";
import { TbSearch } from "react-icons/tb";

const ActionLauncher = () => {
  return (
    <section className="action-launcher">
      <button className='search-button'><TbSearch /> Searching actions..</button>
      <div>
        <button className="custom"><GrAddCircle  className='Addicon'/> Add Action</button>
        <button className="action-button">Fee Reversal</button>
        <button className="action-button">Retail Onboarding</button>
        <button className="action-button">Address Update</button>
      </div>
    </section>
  );
};

export default ActionLauncher;

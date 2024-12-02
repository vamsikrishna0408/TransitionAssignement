import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import CustomerProfile from './CustomerProfile';
import Conversation from './Conversation';
import AskCatura from './AskCatura';
import ActionLauncher from './ActionLauncher';
import CaseFavorite from './CaseFavorite';
import './App.css'

const App = () => {
  return (
    <div className="app-container">
      <div className="content-container">
        <Sidebar />
        <div className='nav-chat-conatiner'>
        <Header />
        <div className="main-content">
          <CustomerProfile />
          <Conversation />
          <div>
              <AskCatura/>
              <ActionLauncher />
              <CaseFavorite />
          </div>
          
      </div>
        </div>
        
    </div>
    </div>
  );
};

export default App;
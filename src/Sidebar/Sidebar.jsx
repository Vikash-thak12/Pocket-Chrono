import React from 'react';
import './Sidebar.css'
import { assets } from '../assets/assets';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h3>Pocket Chrono</h3>
      <div className="bottom">
        <div className="bottom-item">
          <img src={assets.question_icon} />
          <p>Help</p>
        </div>
        <div className="bottom-item">
          <img src={assets.history_icon} />
          <p>Activity</p>
        </div>
        <div className="bottom-item">
          <img src={assets.setting_icon} />
          <p>Setting</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
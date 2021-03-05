import React from 'react';
import './infoBar.css';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

const InfoBar = ({ room, handleLogoutUser }) => (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online icon" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a onClick={handleLogoutUser} href="/"><img src={closeIcon} alt="close icon" /></a>
      </div>
    </div>
  );
  
  export default InfoBar;
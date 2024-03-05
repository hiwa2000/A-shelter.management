import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div style={{width: '80px', height: '150px'}} className="sidebar">
      
      <div className="sidebar-header">
        {/* <h3>Navigation</h3> */}
      </div>
      <ul className="sidebar-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
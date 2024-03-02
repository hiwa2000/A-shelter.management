// Sidebar.js

import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Navigation</h3>
      </div>
      <ul className="sidebar-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="sidebar-footer">
        <p>© 2024 Animal Shelter</p>
      </div>
    </div>
  );
}

export default Sidebar;

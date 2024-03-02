import React from 'react';


function Header() {
  return (
    <header style={{ backgroundColor: 'skyblue' }}>
      <nav>
        <ul>
          <li><a href="/">Startseite</a></li>
          <li><a href="/about">Über uns</a></li>
          <li><a href="/adopt">Adoption</a></li>
          {/* Weitere Links hinzufügen */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import React from 'react';

function Footer() {
  return (
    <footer style={{ position: 'fixed', bottom: 0, width: '100%', textAlign: 'links' }}>
      <nav>
        <ul>
          <li><a href="/contact">Kontakt</a></li>
          <li><a href="/terms">Nutzungsbedingungen</a></li>
          <li><a href="/privacy">Datenschutzrichtlinie</a></li>
          {/* Weitere Links hinzufügen */}
        </ul>
      </nav>
      <div>
        <p>Folgen Sie uns:</p>
        {/* Soziale Medien Links hinzufügen */}
      </div>
    </footer>
  );
}

export default Footer;

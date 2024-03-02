import React from 'react';


const STYLES = ['btn--primary', 'btn--outline']; 
const SIZES = ['btn--medium', 'btn--large']; 

function Homepage() {
  const className = `${STYLES.join(' ')} ${SIZES.join(' ')}`; // Kombiniere beide Klassenarrays

  return (
    <div className="container"> {/* Verwende die Klassen aus der CSS-Datei */}
      <h1 className="title">Willkommen im Tierheim!</h1>
      <button className={className}>Mein Button</button> {/* Verwende die kombinierten Klassen */}
      {/* Inhalt der Startseite hier einfügen */}
    </div>
  );
}

export default Homepage;
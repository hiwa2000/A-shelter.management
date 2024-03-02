import React from 'react';

function AnimalList({ animals }) {
  return (
    <div className="animal-list">
      {animals.map(animal => (
        <div key={animal.id} className="animal-card">
          <img src={animal.image} alt={animal.name} />
          <h2>{animal.name}</h2>
          <p>{animal.species}</p>
          {/* Weitere Informationen zum Tier anzeigen */}
        </div>
      ))}
    </div>
  );
}

export default AnimalList;

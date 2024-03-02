import React from 'react';

function AnimalDetail({ animal }) {
  return (
    <div className="animal-detail">
      <h1>{animal.name}</h1>
      <img src={animal.image} alt={animal.name} />
      <p>Spezies: {animal.species}</p>
      <p>Alter: {animal.age}</p>
      <p>Beschreibung: {animal.description}</p>
      {/* Weitere Informationen hinzufügen */}
    </div>
  );
}

export default AnimalDetail;

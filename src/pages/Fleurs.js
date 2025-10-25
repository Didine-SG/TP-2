import React from 'react';


export default function Fleurs() {
  const fleurs = [
    { id: 1, nom: 'Rose' },
    { id: 2, nom: 'Jasmin' },
    { id: 3, nom: 'Tulipe' }
  ];
  return (
    <div>
      <h2>Fleurs</h2>
      <ul className="list-group">
        {fleurs.map((f) => (
          <li className="list-group-item" key={f.id}>{f.nom}</li>
        ))}
      </ul>
    </div>
  );
}
import React from 'react';


export default function Bouquet({ bouquet }) {
  return (
    <div className="card h-100">
      <img src={bouquet.image} className="card-img-top" alt={bouquet.nom} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{bouquet.nom}</h5>
        <p className="card-text">{bouquet.descr}</p>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="fw-bold">{bouquet.prix} DA</span>
          <button className="btn btn-primary">Ajouter</button>
        </div>
      </div>
    </div>
  );
}
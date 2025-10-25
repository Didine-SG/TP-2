import React from 'react';
import Bouquet from '../components/Boquet';


export default function Bouquets({ bouquets }) {
  return (
    <div>
      <h2>Nos Bouquets</h2>
      <div className="row">
        {bouquets.map((b) => (
          <div className="col-md-4 mb-4" key={b.id}>
            <Bouquet bouquet={b} />
          </div>
        ))}
      </div>
    </div>
  );
}
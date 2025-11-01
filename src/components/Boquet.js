import React, { useState } from 'react';

export default function Bouquet({ bouquet }) {
  const [liked, setLiked] = useState(bouquet.liked);

  const handleLike = async () => {
      setLiked(!liked);
      const response = await fetch(`http://localhost:3000/like?id=${bouquet.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ liked: !liked }),
      });
  };

  return (
    <div className="card h-100">
      <img src={bouquet.image} className="card-img-top" alt={bouquet.nom} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{bouquet.nom}</h5>
        <p className="card-text">{bouquet.descr}</p>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="fw-bold">{bouquet.prix} DA</span>
          <div className="d-flex gap-2">
            <button className="btn btn-primary">Ajouter</button>
            <button
              onClick={handleLike}
              className={`btn ${liked ? 'btn-danger' : 'btn-outline-danger'}`}
            >
              {liked ? '♥' : '♡'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

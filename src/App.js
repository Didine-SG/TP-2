import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Bouquets from './pages/Bouquets';
import Fleurs from './pages/Fleurs';
import MonCompte from './pages/MonCompte';


const mesBouquets = [
  { id: 1, nom: 'Bouquet de Tunis', descr: "Un dosage parfait de jasmins et de tulipes, des couleurs éclatantes et du soleil toute l'année chez vous", image: '/images/bouquetTunis.jpg', prix: 1500.0 },
  { id: 2, nom: 'Bouquet d\'Alger', descr: "Un mélange merveilleux de jasmins et de senteurs méditerranéennes, des odeurs éclatantes pour égayer votre bureau", image: '/images/bouqetAlger.jpg', prix: 2000.0 },
  { id: 3, nom: 'Bouquet d\'Oran', descr: "Un mélange merveilleux de roses et de lys, des odeurs et des couleurs", image: '/images/bouquetOran.jpg', prix: 2000.0 }
];


const menu = [
  { url: '/home', nom: 'Home' },
  { url: '/bouquets', nom: 'Bouquets' },
  { url: '/fleurs', nom: 'Fleurs' },
  { url: '/moncompte', nom: 'Mon Compte' }
];


export default function App() {
  return (
    <BrowserRouter>
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">Fleuriste</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {menu.map((m) => (
                <li className="nav-item" key={m.url}>
                  <Link className="nav-link" to={m.url}>{m.nom}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>


      <main className="container" style={{ marginTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/bouquets" element={<Bouquets bouquets={mesBouquets} />} />
          <Route path="/fleurs" element={<Fleurs />} />
          <Route path="/moncompte" element={<MonCompte />} />
        </Routes>
      </main>
      </div>
    </BrowserRouter>
  );
}


function Home() {
  return (
    <div className="text-center">
      <h1>Bienvenue chez Fleuriste</h1>
      <p>Découvrez nos bouquets et nos fleurs fraîches.</p>
    </div>
  );
}
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let mesBouquets = [
  { id: 1, nom: 'Bouquet de Tunis', descr: "Un dosage parfait de jasmins et de tulipes, des couleurs éclatantes et du soleil toute l'année chez vous", image: '/images/boquetTunis.png', prix: 1500.0, liked: false },
  { id: 2, nom: "Bouquet d'Alger", descr: "Un mélange merveilleux de jasmins et de senteurs méditerranéennes, des odeurs éclatantes pour égayer votre bureau", image: '/images/bouqetAlger.png', prix: 2000.0, liked: false },
  { id: 3, nom: "Bouquet d'Oran", descr: "Un mélange merveilleux de roses et de lys, des odeurs et des couleurs", image: '/images/boquetOran.png', prix: 2000.0, liked: false }
];

app.get('/bouquets', (req, res) => {
  res.json(mesBouquets);
});

app.post('/like', (req, res) => {
  const id = parseInt(req.query.id);
  const bouquet = mesBouquets.find(b => b.id === id);
  bouquet.liked = !bouquet.liked;
  res.json(bouquet);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

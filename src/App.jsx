import { useState } from 'react';
import './App.css';
import ElevePage from './ElevePage.jsx';
import ProfPage from './ProfPage.jsx';

function App() {
  const [role, setRole] = useState('eleve');
  const [identifiant, setIdentifiant] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [notes, setNotes] = useState([]);
  const [nomProf, setNomProf] = useState('');
  const [prenomProf, setPrenomProf] = useState('');
  const [nomEleve, setNomEleve] = useState('');
  const [prenomEleve, setPrenomEleve] = useState('');


  const handleRoleChange = (newRole) => {
    setRole(newRole);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('https://mmarchais002.zzz.bordeaux-inp.fr/etudiant.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          role,
          identifiant,
          motDePasse,
        }),
      });

      const data = await response.json();
      console.log('Réponse du serveur:', data);

      if (data.success && Array.isArray(data.notes)) {
        setNotes(data.notes);
        setNomEleve(data.nom_etudiant);
        setNomProf(data.nom_prof); 
        setPrenomProf(data.prenom_prof);
        setPrenomEleve(data.prenom_etudiant);
        setIsLoggedIn(true);
      } else {
        alert(data.message || 'Identifiants incorrects ou erreur de données.');
      }
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      alert('Erreur de connexion au serveur.');
    }
  };

  // 🔁 Affichage après connexion
  if (isLoggedIn) {
    return role === 'eleve' ? (
      <ElevePage notes={notes} nomEleve={nomEleve} prenomEleve={prenomEleve} />
    ) : (
      <ProfPage notes={notes} nomProf={nomProf} prenomProf={prenomProf} identifiant={identifiant}/>
    );
  }

  // 🔒 Formulaire de connexion
  return (
    <div className="app-container">
      <div className="login-box">
        <div className='welcome-container'>
        <img src="poulpe3-D8bHRIu3.jpg" alt="Logo Poulpy Academy" className="logo" />
        <h1>Bienvenue sur Poulpy Academy !</h1>
        </div>
        <div className="role-switch">
          <button
            className={`role-btn ${role === 'eleve' ? 'active' : ''}`}
            onClick={() => handleRoleChange('eleve')}
          >
            Élève
          </button>
          <button
            className={`role-btn ${role === 'professeur' ? 'active' : ''}`}
            onClick={() => handleRoleChange('professeur')}
          >
            Professeur
          </button>
        </div>
        <h2 className="login-title">
          Connexion {role === 'eleve' ? 'élève' : 'professeur'}
        </h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="Identifiant"
            value={identifiant}
            onChange={(e) => setIdentifiant(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
            className="input-field"
          />
          <button onClick={handleLogin} className="submit-btn">
            Se connecter
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

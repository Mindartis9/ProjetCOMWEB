import { useState } from 'react';
import './App.css';

function App() {
  const [role, setRole] = useState('eleve');
  const [identifiant, setIdentifiant] = useState('');
  const [motDePasse, setMotDePasse] = useState('');

  const handleRoleChange = (newRole) => {
    setRole(newRole);
  };

  const handleLogin = () => {
    console.log(`Tentative de connexion : ${role}, ${identifiant}, ${motDePasse}`);
  };

  return (
    <div className="app-container">
      <div className="login-box">
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
        <h2 className="login-title">Connexion {role === 'eleve' ? "élève" : "professeur"}</h2>
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
          <button
            onClick={handleLogin}
            className="submit-btn"
          >
            Se connecter
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

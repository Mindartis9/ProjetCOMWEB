import { useState } from 'react';
import './App.css';

const ProfPage = ({ notes, nomProf , prenomProf, identifiant}) => {
  const [prenomEleve, setPrenomEleve] = useState('');
  const [nomEleve, setNomEleve] = useState('');
  const [note, setNote] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [identifiantProf, setIdentifiantProf] = useState(identifiant);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://mmarchais002.zzz.bordeaux-inp.fr/ajouter_note.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifiant_prof: identifiantProf,
        prenom_etudiant: prenomEleve,
        nom_etudiant: nomEleve,
        valeur_note: note,
      }),
    });

    const data = await response.json();
    if (data.success) {
      setConfirmation('Note ajoutée avec succès.');
      setPrenomEleve('');
      setNomEleve('');
      setNote('');
    } else {
      setConfirmation('Erreur : ' + data.message);
    }
  };

  return (
   <div className="notes-container">

      <div className="header-box">
        Bonjour {prenomProf} {nomProf}
      </div>

      <h3>Notes attribuées :</h3>     {/*Tableau de notes*/}
      
        {notes.map((noteItem, index) => (
          <div key={index} className="tableau-notes">
            <div className="titre">
              <strong>{noteItem.nomEleve} {noteItem.prenomEleve}</strong>
              <div className="sous-titre">
                Classe {noteItem.classe}
              </div>
            </div>
            <div className="note">{noteItem.note}/20</div>
          </div>
        ))}
      

      <h3 style={{ marginTop: '30px' }}>Attribuer une nouvelle note :</h3>
      <form onSubmit={handleSubmit} className="formulaire">
    
        <input
          type="text"
          placeholder="Prénom de l'élève"
          value={prenomEleve}
          onChange={(e) => setPrenomEleve(e.target.value)}
          required
          className="input-field2"
        />

        <input 
          type="text"
          placeholder="Nom de l'élève"
          value={nomEleve}
          onChange={(e) => setNomEleve(e.target.value)}
          required
          className="input-field2"
        />

        <input 
          type="number"
          placeholder="Note /20"
          min="0"
          max="20"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          required
          className="input-field2"
        />

        <button type="submit" className="submit-button">
          Ajouter la note
        </button>
      </form>
      {confirmation && <p className="message">{confirmation}</p>}
    </div>
  );
};

export default ProfPage;

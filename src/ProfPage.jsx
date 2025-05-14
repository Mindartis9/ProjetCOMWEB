import { useState } from 'react';
import './App.css';

const ProfPage = ({ notes, nomProf , prenomProf, identifiant}) => {
  const [idEleve, setIdEleve] = useState('');
  const [note, setNote] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [identifiantProf, setIdentifiantProf] = useState(identifiant);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost/ProjetComWeb/ajouter_note.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifiant_prof: identifiantProf,
        id_etudiant: idEleve,
        valeur_note: note,
      }),
    });

    const data = await response.json();
    if (data.success) {
      setConfirmation('Note ajoutée avec succès.');
      setIdEleve('');
      setNote('');
    } else {
      setConfirmation('Erreur : ' + data.message);
    }
  };

  return (
    <div>
      <h2>Bienvenue Professeur {prenomProf} {nomProf}</h2>
      <h3>Notes attribuées :</h3>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            Classe {note.classe}, Élève : {note.nomEleve} {note.prenomEleve} : {note.note}/20
          </li>
        ))}
      </ul>

      <h3>Attribuer une nouvelle note :</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ID de l'élève"
          value={idEleve}
          onChange={(e) => setIdEleve(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Note /20"
          min="0"
          max="20"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          required
        />
        <button type="submit">Ajouter la note</button>
      </form>
      <p>{confirmation}</p>
    </div>
  );
};

export default ProfPage;

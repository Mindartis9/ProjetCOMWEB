import './App.css';

const ProfPage = ({ notes, nomProf, prenomProf }) => {
  return (
    <div>
      <h2>Bienvenue Professeur {prenomProf} {nomProf}</h2>
      <h3>Notes attribuées :</h3>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            Élève : {note.nomEleve} - {note.matiere} : {note.note}/20
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfPage;

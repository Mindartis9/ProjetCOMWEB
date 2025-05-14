import './App.css';

const ElevePage = ({ notes, nomEleve, prenomEleve }) => {
  return (
    <div>
      <h2>Bienvenue {prenomEleve} {nomEleve}</h2>
      <h3>Page notes</h3>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note.professeur} - {note.matiere} : {note.note}/20
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ElevePage;

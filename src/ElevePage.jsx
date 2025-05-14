const ElevePage = ({ notes, nomEleve }) => {
  return (
    <div>
      <h2>Bienvenue {nomEleve}</h2>
      <h3>Vos notes :</h3>
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

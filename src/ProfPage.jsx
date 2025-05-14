const ProfPage = ({ notes, identifiant }) => {
  return (
    <div>
      <h2>Bienvenue Professeur {identifiant}</h2>
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

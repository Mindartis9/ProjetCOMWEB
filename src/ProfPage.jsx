const ProfPage = ({ notes, nomProf }) => {
  return (
    <div>
      <h2>Bienvenue Professeur {nomProf}</h2>
      <h3>Notes attribuées :</h3>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            Classe {note.classe}, Élève : {note.nomEleve} {note.prenomEleve} : {note.note}/20
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfPage;

const ElevePage = ({ notes, identifiant }) => {
  return (
    <div>
      <h2>Bienvenue {identifiant}</h2>
      <h3>Vos notes :</h3>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note.matiere} : {note.note}/20
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ElevePage;

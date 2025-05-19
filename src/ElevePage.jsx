import './App.css';

const ElevePage = ({ notes, nomEleve, prenomEleve }) => { // Page d'accueil de l'élève
  return (
    <div>
      <div className="header-box">
        Bienvenue {prenomEleve} {nomEleve}
      </div>

      <h3>Vos notes : </h3>     {/*Tableau de notes*/}
      {notes.map((note, index) => (
        <div key={index} className="tableau-notes">
          <div className="titre">
            <strong>{note.matiere}</strong>
            <div className="sous-titre">{note.professeur}</div>
          </div>
          <div className="note">{note.note}/20</div>
        </div>
      ))}
    </div>
  );
};

export default ElevePage;

import { useLocation } from 'react-router-dom';
import './CharacterInfo.css';

function CharacterInfo() {
  const { state } = useLocation();
  const { character } = state || {};
  const fullName = `${character.name.first} ${character.name.middle || ''} ${character.name.last}`.trim();

  if (!character) {
    return <div>No hay datos del personaje</div>;
  }

  return (
    <div className="character-detail-container">
      <div className="character-detail-content">
        <div className="character-image-container">
          <img 
            src={character.images.main} 
            alt={fullName}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/150?text=No+Image';
            }}
          />
        </div>
        <div className="character-info">
          <h1>{fullName}</h1>
          <p><strong>Especie:</strong> {character.species}</p>
          <p><strong>Edad:</strong> {character.age}</p>
          <p><strong>Ocupación:</strong> {character.occupation}</p>
          <p><strong>Planeta:</strong> {character.homePlanet}</p>
          <p><strong>Género:</strong> {character.gender}</p>
          <p><strong>Frase:</strong> {character.sayings[0]}</p>
        </div>
      </div>
    </div>
  );
}

export default CharacterInfo;

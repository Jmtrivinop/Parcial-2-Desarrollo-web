import { useLocation} from 'react-router-dom';

function CharacterInfo() {
  const { state } = useLocation();
  const { character } = state || {};
  const fullName = `${character.name.first} ${character.name.middle || ''} ${character.name.last}`.trim();

  if (!character) {
    
    return <div>No hay datos del personaje</div>;
  }

  return (
    <div className="character-detail-container">
        <img 
            src={character.images.main} 
            alt={fullName}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/150?text=No+Image';
            }}
          />
      <h1>{fullName}</h1>
        <p>Specie: {character.species}</p> 
        <p>Age: {character.age}</p>
        <p>Occupation: {character.occupation}</p>    
        <p>Planet: {character.homePlanet}</p>
        <p>Gender: {character.gender}</p>
        <p>Sayings: {character.sayings.join(', ')}</p>
       
      
      
    </div>
  );
}

export default CharacterInfo;
import { Link } from 'react-router-dom';
import {ThemeContext} from '../Theme/ThemeContext'
import { useContext } from 'react';
import './CharacterCard.css'

function CharacterCard({ character }) {
  const { name, images, species, id } = character;

  const {modoOscuro} = useContext(ThemeContext)
  
  const fullName = `${name.first} ${name.middle || ''} ${name.last}`.trim();

  

  return (
    <Link to={`/characters/${id}`} state={{character}}style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className={`character-card ${modoOscuro ? "dark" : ''}`} >
        <div className="character-image">
          <img 
            src={images.main} 
            alt={fullName}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/150?text=No+Image';
            }}
          />
        </div>
        <div className="character-info">
          <h2>{fullName}</h2>
          <p>Especie: {species}</p>
        </div>
      </div>
    </Link>
  );
}

export default CharacterCard;

import { useContext } from 'react';
import { ThemeContext } from '../Theme/ThemeContext'; 
import { Link } from 'react-router-dom';

function CharacterCard({ character }) {
  const { name, images, species, id } = character;
  const { modoOscuro } = useContext(ThemeContext);
  const fullName = `${name.first} ${name.middle || ''} ${name.last}`.trim();

  const cardStyle = {
    backgroundColor: modoOscuro ? '#1e1e1e' : '#fff',
    color: modoOscuro ? '#fff' : '#000',
    transition: 'all 0.3s ease',
    textDecoration: 'none', 
  };

  return (
    <Link to={`/characters/${id}`} state={{character}}style={{ textDecoration: 'none' }}>
      <div className="character-card" style={cardStyle}>
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

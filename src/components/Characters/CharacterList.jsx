import { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import './CharacterList.css';

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchNameTerm, setSearchNameTerm] = useState('');
  const [searchSpecieTerm, setSearchSpecieTerm] = useState('')
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    if (localStorage.getItem('searchName') != null) {
      setSearchNameTerm(localStorage.getItem('searchName'))
    }

    if (localStorage.getItem('searchEspecie') != null) {
      setSearchSpecieTerm(localStorage.getItem('searchEspecie'))
    }

    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://api.sampleapis.com/futurama/characters');
        
        if (!response.ok) {
          throw new Error('Error al obtener los personajes');
        }
        
        const data = await response.json();
        setCharacters(data);
        setFilteredCharacters(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  useEffect(() => {
    console.log("entre")
    const results = characters.filter(character =>
      (character.name.first.toLowerCase().includes(searchNameTerm.toLowerCase()) || character.name.last.toLowerCase().includes(searchNameTerm.toLowerCase())) && character.species.toLowerCase().includes(searchSpecieTerm.toLowerCase())
    );
    setFilteredCharacters(results);
  }, [searchNameTerm, searchSpecieTerm, characters]);

  const handleSearch = (e) => {
    if (e.target.name == "nombre") {
      setSearchNameTerm(e.target.value); 
      localStorage.setItem('searchName', e.target.value)
    }

    if (e.target.name == "especie") {
      setSearchSpecieTerm(e.target.value)
      localStorage.setItem('searchEspecie', e.target.value)
    }
  };

  if (loading) {
    return <div className="loading">Cargando personajes...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="character-container">
      <h1>Personajes de Futurama</h1>
      
      <div className="search-container">
        <input
          type="text"
          name='nombre'
          placeholder="Buscar personaje por nombre"
          value={searchNameTerm}
          onChange={handleSearch}
          className="search-input"
        />

        <input
          type="text"
          name='especie'
          placeholder="Buscar personaje por especie"
          value={searchSpecieTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
      
      {filteredCharacters.length === 0 ? (
        <div className="no-results">No se encontraron personajes con ese nombre</div>
      ) : (
        <div className="character-grid">
          {filteredCharacters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CharacterList;
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../Theme/ThemeContext'; // Ajusta si tu ruta es distinta
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const { modoOscuro, toggleTema } = useContext(ThemeContext);

  const navbarStyle = {
    backgroundColor: modoOscuro ? '#111' : '#fff',
    color: modoOscuro ? '#fff' : '#000',
    transition: 'all 0.3s ease'
  };

  return (
    <nav className="navbar" style={navbarStyle}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/characters" style={{ color: 'inherit', textDecoration: 'none' }}>
            <span className="logo-text">FUTURAMA</span>
          </Link>
        </div>

        <div className="navbar-links">
          <Link 
            to="/characters" 
            className={location.pathname === '/characters' ? 'active' : ''}
          >
            Personajes
          </Link>
          <Link 
            to="/form" 
            className={location.pathname === '/form' ? 'active' : ''}
          >
            Formulario
          </Link>
          {/* Botón para cambiar el tema */}
          <button onClick={toggleTema} className="theme-toggle-btn">
            {modoOscuro ? '☀️ Claro' : '🌙 Oscuro'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

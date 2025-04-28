import { Link, useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../Theme/ThemeContext'; // Ajusta si tu ruta es distinta
import './Navbar.css';

function Navbar({logOut}) {
  const location = useLocation();
  const { modoOscuro, toggleTema } = useContext(ThemeContext);
  const [user, setUser] = useState(null)

  useEffect(() => {

    setUser(localStorage.getItem('user'))
    console.log(user)
  }, [user])

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
                <Link 
                  to="/about" 
                  className={location.pathname === '/about' ? 'active' : ''}
                >
                  About Us
                </Link>
                {/* Botón para cambiar el tema */}
                <button onClick={toggleTema} className="theme-toggle-btn">
                  {modoOscuro ? '☀️ Claro' : '🌙 Oscuro'}
                </button>

                <button>
                  {user}
                </button>

                <button onClick={logOut}>
                    Log out
                </button>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;

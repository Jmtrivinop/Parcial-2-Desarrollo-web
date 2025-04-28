import { Link, useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../Theme/ThemeContext'; // Ajusta si tu ruta es distinta
import './Navbar.css';
import InstallButton from '../PWA/InstallButton';

function Navbar({ logOut }) {
  const location = useLocation();
  const { modoOscuro, toggleTema } = useContext(ThemeContext);
  const [user, setUser] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false); // Estado para controlar el menú desplegable
  const [hamburgerVisible, setHamburgerVisible] = useState(false); // Estado para controlar el ícono de hamburguesa

  useEffect(() => {
    setUser(localStorage.getItem('user'));
    console.log(user);
  }, [user]);

  const navbarStyle = {
    backgroundColor: modoOscuro ? '#111' : '#fff',
    color: modoOscuro ? '#fff' : '#000',
    transition: 'all 0.3s ease'
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible); // Alterna la visibilidad del menú desplegable
  };

  const toggleHamburgerMenu = () => {
    setHamburgerVisible(!hamburgerVisible); // Alterna la visibilidad del menú hamburguesa
  };

  return (
    <nav className="navbar" style={navbarStyle}>
  <div className="navbar-container">
    <div className="navbar-logo">
      <Link to="/characters" style={{ color: 'inherit', textDecoration: 'none' }}>
        <span className="logo-text">FUTURAMA</span>
      </Link>
    </div>

    {/* Ícono de hamburguesa en móvil */}
    <button className="hamburger-icon" onClick={toggleHamburgerMenu}>
      ☰
    </button>

    {/* Menú hamburguesa en móvil */}
    {hamburgerVisible && (
      <div className="hamburger-menu">
        <Link to="/characters" className={location.pathname === '/characters' ? 'active' : ''} onClick={toggleHamburgerMenu}>
          Personajes
        </Link>
        <Link to="/form" className={location.pathname === '/form' ? 'active' : ''} onClick={toggleHamburgerMenu}>
          Formulario
        </Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={toggleHamburgerMenu}>
          About Us
        </Link>

        {/* Botón cambiar tema DENTRO del menú */}
        <button onClick={toggleTema} className="theme-toggle-btn">
          {modoOscuro ? '☀️ Claro' : '🌙 Oscuro'}
        </button>

        {/* También puedes incluir InstallButton aquí si quieres */}
        <InstallButton />
      </div>
    )}

    {/* Links normales en escritorio */}
    <div className="navbar-links">
      <Link to="/characters" className={location.pathname === '/characters' ? 'active' : ''}>
        Personajes
      </Link>
      <Link to="/form" className={location.pathname === '/form' ? 'active' : ''}>
        Formulario
      </Link>
      <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
        About Us
      </Link>

      {/* Botón cambiar tema SOLO en escritorio */}
      <button onClick={toggleTema} className="theme-toggle-btn">
        {modoOscuro ? '☀️ Claro' : '🌙 Oscuro'}
      </button>

      <InstallButton />
    </div>

    {/* El usuario SIEMPRE visible, afuera */}
    {user && (
      <div className="user-container">
        <button className="user-button" onClick={toggleMenu}>
          {user}
        </button>
        {menuVisible && (
          <div className="user-menu">
            <button onClick={logOut} className="logout-button">
              Log out
            </button>
          </div>
        )}
      </div>
    )}
  </div>
</nav>

  

  );
}

export default Navbar;

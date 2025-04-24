import { useContext } from 'react';
import { ThemeContext } from '../Theme/ThemeContext'; // Ajusta la ruta si es distinta
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import './Layout.css';

function Layout() {
  const { modoOscuro } = useContext(ThemeContext); // Obtenemos el tema actual

  return (
    <div className={`layout ${modoOscuro ? 'dark-theme' : 'light-theme'}`}>
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;

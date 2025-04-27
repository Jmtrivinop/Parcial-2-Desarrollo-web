import { useContext } from 'react';
import { ThemeContext } from '../Theme/ThemeContext'; // Ajusta la ruta si es distinta
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import './Layout.css';

function Layout({logOut}) {


  return (
    <div className={`layout`}>
      <Navbar logOut={logOut} />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;

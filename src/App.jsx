import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Layout from './components/Layout/Layout';
import CharacterList from './components/Characters/CharacterList';
import ContactForm from './components/Form/ContactForm';
import CharacterInfo from './components/Characters/CharacterInfo';
import ThemeProvider from './components/Theme/ThemeContext';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {!isLoggedIn ? (
            <Route path="/" element={<Login onLogin={handleLogin} />} />
          ) : (
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="/characters" replace />} />
              <Route path="characters" element={<CharacterList />} />
              <Route path="characters/:id" element={<CharacterInfo/>} />
              {/* Aquí puedes agregar más rutas para otros componentes */}
              <Route path="form" element={<ContactForm />} />
            </Route>
          )}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

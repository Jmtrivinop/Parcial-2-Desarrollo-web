import { useState, useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Layout from './components/Layout/Layout';
import CharacterList from './components/Characters/CharacterList';
import CharacterInfo from './components/Characters/CharacterInfo';
import ContactForm from './components/Form/ContactForm';
import AboutUs from './components/AboutUs/AboutUs';
import ThemeProvider, { ThemeContext } from './components/Theme/ThemeContext';
import './App.css';

function AppContent() {
  const { modoOscuro } = useContext(ThemeContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() =>{

    const user = localStorage.getItem('user')

    if (user)
    {
      setIsLoggedIn(true)
    }
    setIsLoading(false)
  }, [])

  const handleLogout = () => {

    localStorage.clear()
    setIsLoggedIn(false)
  }

  const handleLogin = (userName) => {
    localStorage.setItem('user', userName)
    setIsLoggedIn(true)
  };

  if (isLoading) {
    return null;
  }

  return (
    <div className={`app ${modoOscuro ? 'dark-theme' : 'light-theme'}`}>
      <BrowserRouter>
        <Routes>
          {!isLoggedIn ? (
            <Route path="/" element={<Login onLogin={handleLogin} />} />
          ) : (
            <>
              <Route path="/" element={<Layout logOut={handleLogout} />}>
                <Route index element={<Navigate to="/characters" replace />} />
                <Route path="characters" element={<CharacterList />} />
                <Route path="characters/:id" element={<CharacterInfo />} />
                <Route path="about" element={<AboutUs/>} />
                <Route path="form" element={<ContactForm />} />
              </Route>
            </>
          )}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

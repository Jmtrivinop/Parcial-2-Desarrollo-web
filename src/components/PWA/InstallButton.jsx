import { useState, useEffect } from 'react';

function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      console.log('beforeinstallprompt event detected');
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Usuario aceptó instalar');
        } else {
          console.log('Usuario rechazó instalar');
        }
        setDeferredPrompt(null);
      });
    }
  };

  if (!deferredPrompt) {
    console.log("no esta preparado")
    return null;// no mostrar el botón hasta que se pueda instalar
  }

  return (
    <button onClick={handleInstallClick}>
      Instalar App
    </button>
  );
}

export default InstallButton;

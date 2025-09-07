
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Capacitor } from '@capacitor/core';

// Initialize app
const initApp = () => {
  createRoot(document.getElementById("root")!).render(<App />);
};

// On Capacitor platform, wait for device ready
if (Capacitor.isNativePlatform()) {
  document.addEventListener('deviceready', initApp, false);
} else {
  // On web, just initialize
  initApp();
}

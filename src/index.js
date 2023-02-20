import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from './firebaseConfig';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={<p>Cargando...</p>}>
        <App />
      </Suspense>
    </FirebaseAppProvider>
  </React.StrictMode>
);

reportWebVitals();

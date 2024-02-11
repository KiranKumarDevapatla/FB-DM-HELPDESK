import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import facebookInit from "./components/facebookSDK/FBInit";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

facebookInit().then(startApp);

function startApp(response) {
  root.render(
    <React.StrictMode>
      <App response={response}/>
    </React.StrictMode>
  );
}

reportWebVitals();

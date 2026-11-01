import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'react-photo-view/dist/react-photo-view.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { captureAttribution } from './utils/attribution';

// Old shared links look like /#/th/project/23 - move them to /th/project/23.
if (window.location.hash.startsWith('#/')) {
  window.history.replaceState(null, '', window.location.hash.slice(1));
}

captureAttribution();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

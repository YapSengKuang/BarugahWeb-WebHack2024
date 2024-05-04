import React from 'react';
import ReactDOM from 'react-dom';
import App from './page';

const element = document.getElementById('root');
if (element !== null) {
  const root = ReactDOM.createRoot(element);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
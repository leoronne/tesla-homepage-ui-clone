import React from 'react';
import ReactDOM from 'react-dom';

import { LoaderSpinner } from './components';

import App from './App';

ReactDOM.render(
  <React.Suspense fallback={<LoaderSpinner color="#e82127" />}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </React.Suspense>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';

import { LoaderSpinner } from './components';

import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.Suspense fallback={<LoaderSpinner />}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </React.Suspense>,
  document.getElementById('root')
);

serviceWorker.unregister();

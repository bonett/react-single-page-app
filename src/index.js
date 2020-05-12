import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import RouteApp from './containers';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <RouteApp />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

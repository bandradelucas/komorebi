import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import '@elastic/eui/dist/eui_theme_dark.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

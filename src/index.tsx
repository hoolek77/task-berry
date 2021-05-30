import './i18n';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import { RootProvider } from 'providers';
import GlobalStyle from 'styles/global';

ReactDOM.render(
  <React.StrictMode>
    <RootProvider>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RootProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

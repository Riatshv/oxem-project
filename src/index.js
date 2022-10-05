import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Page } from './components/Page/Page';
import "./stylesheet.css"

import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Page></Page>
    </Provider>
  </React.StrictMode>
);

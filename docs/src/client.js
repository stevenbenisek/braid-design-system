import 'focus-visible';
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App/App';

const { routerBasename, sourceUrlPrefix } = window.CONFIG;

hydrate(
  <BrowserRouter basename={routerBasename}>
    <App sourceUrlPrefix={sourceUrlPrefix} />
  </BrowserRouter>,
  document.getElementById('app')
);

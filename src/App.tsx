import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Routes } from './Routes';
import { DokoProvider } from 'doko';

// TODO add your doko id
const DOKO_APP_ID = '';

function App() {
  return (
    <Router>
      <DokoProvider app={DOKO_APP_ID}>
        <Routes />
      </DokoProvider>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Routes } from './Routes';
import { DokoProvider } from 'doko';

// TODO add your doko id
const DOKO_APP_ID = '5fb29b20e9e18915f9e30710';

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

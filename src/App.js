import React from 'react';
import { Router } from '@reach/router';

import Home from './pages/Home';
import Tracks from './pages/Tracks';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Tracks path="/tracks" />
      </Router>
    </div>
  );
}

export default App;

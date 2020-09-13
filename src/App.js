import React from 'react';
import { Router } from '@reach/router';
import './App.css';

// Components
import Header from './shared/components/Header';

// Pages
import Home from './pages/Home';
import Tracks from './pages/Tracks';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Home path="/" />
        <Tracks path="tracks" />
      </Router>
    </div>
  );
}

export default App;

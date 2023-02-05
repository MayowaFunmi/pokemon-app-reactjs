import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import PokeApp from './components/pages/PokeApp';
import PokeDetails from './components/pages/PokeDetails';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/poke" element={<PokeApp />} />
          <Route path="/details/:name" element={<PokeDetails />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;

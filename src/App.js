import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import Haz from './haz';
import Zones from './zones';
import Edit from './components/zones/edit';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
        <Route path="/" exact element={<Haz />} />
        <Route path="/zones" exact element={<Zones />} />
        <Route path="/zones/edit" exact element={<Edit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import {React, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import Haz from './haz';
import Zones from './zones';
import Edit from './components/zones/edit';
import Add from './components/zones/add';
import Cameras from './cameras';
import Stats from './stats';
import Config from './config';
import FullscreenButton from './flw';
import Users from './users';







function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
 
        <FullscreenButton />
        <Routes>
        <Route path="/" exact element={<Haz />} />
        <Route path="/zones" exact element={<Zones />} />
        <Route path="/zones/edit" exact element={<Edit />} />
        <Route path="/zones/add" exact element={<Add />} />
        <Route path="/cameras" exact element={<Cameras />} />
        <Route path="/analytics" exact element={<Stats />} />
        <Route path="/config" exact element={<Config />} />
        <Route path="/users" exact element={<Users />} />

        </Routes>
        
      </div>
    </Router>
  );
}

export default App;

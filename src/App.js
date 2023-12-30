import {React, useEffect,useState} from 'react';
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
import StateReport from './components/statReport/statRepoprt';
import StateReport2 from './components/statReport/report2';
import { usePDF } from 'react-to-pdf';
import axios from 'axios';
import Login from './components/login/login';



function App() {

  
 
  const user='admin'
  return (
    <Router>
      <div className="App">
        <Nav user={user} />
       
          
      
    
        <FullscreenButton />
        <Routes>
        
        <Route path="/login" exact element={<Login />} />
        <Route path="/" exact element={<Haz />} />
        <Route path="/zones" exact element={<Zones />} />
        <Route path="/zones/edit" exact element={<Edit />} />
        <Route path="/zones/add" exact element={<Add />} />
        <Route path="/cameras" exact element={<Cameras />} />
        <Route path="/analytics" exact element={<Stats />} />
        <Route path="/statreport2" exact element={<StateReport2 />} />
        {user=='admin'?(<Route path="/config" exact element={<Config user={user} />} />):''}
        
        <Route path="/users" exact element={<Users user={user}  />} />

        </Routes>
        
      </div>
    </Router>
  );
}

export default App;

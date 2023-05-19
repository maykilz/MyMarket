import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import '../src/All.scss';
import { Route, Routes } from 'react-router-dom';

import React, { useState } from 'react'; 
import Main from './pages/main/Main';
 


   



function App() {
  return (
    <div className="App">
      <Header/> 
      <Routes>
        <Route path='/' element={<Main  />} />  
      </Routes> 
    </div>
  );
}

export default App;

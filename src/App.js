import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar'
import Home from './components/home'

function App() {
  return (
    <div className='container-fluid'>
      <NavBar/>
      <Home/>
    </div>
  );
}

export default App;

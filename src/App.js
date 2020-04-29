import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar'
import Home from './components/home'
import Cart from './components/cart'

function App() {
  return (
    <div className='container-fluid'>
      <NavBar/>
      <Home/>
      <Cart/>
    </div>
  );
}

export default App;

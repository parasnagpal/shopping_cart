import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import './App.css';

import NavBar from './components/navbar'
import Home from './components/home'
import Cart from './components/cart'

function App() {
  return (
    <Router>
        <div className='container-fluid'>
        <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/cart" component={Cart} />
            </Switch>
        </div>
    </Router>
  );
}

export default App;

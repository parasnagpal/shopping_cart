import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {Row,Col} from 'reactstrap'
import './App.css';
import NavBar from './components/navbar'
import Home from './components/home'
import Cart from './components/cart'
import Mens from './components/categories/mens'
import SideNav from './components/sidenav'

function App() {
  return (
    <Router>
        <div className='container-fluid'>
        <NavBar/>
            <Row>
              <Col sm="12" md="2"><SideNav/></Col>
              <Col>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/mens" component={Mens}/>
                  <Route path="/cart" component={Cart} />
              </Switch>
              </Col>
            </Row>
        </div>
    </Router>
  );
}

export default App;

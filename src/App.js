import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {Row,Col} from 'reactstrap'
import './App.css';
import NavBar from './components/navbar'
import Cart from './components/cart'
import Mens from './components/categories/mens'
import Women from './components/categories/women'
import Children from './components/categories/children'
import SideNav from './components/sidenav'
import {Spinner} from 'reactstrap'
const Home=React.lazy(()=>import('./components/home'))

function App() {
  return (
    <Router>
        <div className='container-fluid'>
        <NavBar/>
            <Row>
              <Col sm="12" md="2"><SideNav/></Col>
              <Col>
              <Switch>
                  <React.Suspense fallback={Spinner}>
                  <Route exact path="/" component={Home}/>
                  </React.Suspense>
                  <Route path="/men" component={Mens}/>
                  <Route path="/women" component={Women}/>
                  <Route path="/children" component={Children}/>
                  <Route path="/cart" component={Cart} />
              </Switch>
              </Col>
            </Row>
        </div>
    </Router>
  );
}

export default App;

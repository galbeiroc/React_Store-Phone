import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import ProducList from './components/ProducList';
import Default from './components/Default';
import Details from './components/Details';
import Cart from './components/Cart';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProducList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  );
}

export default App;

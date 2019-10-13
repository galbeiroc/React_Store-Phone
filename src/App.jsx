import React from 'react';
import Navbar from '../src/components/Navbar';
import ProducList from './components/ProducList';
import Product from './components/Product';
import Details from './components/Details';
import Card from './components/Card';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <ProducList />
      <Card />
      <Details />
    </React.Fragment>
  );
}

export default App;

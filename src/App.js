import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import North from "./North";
import South from './South';
import West from './West';
import East from './East';


import {Switch,Route, Redirect} from "react-router-dom";
const App = () => {
  return (
    <>
  
  <Navbar />
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/North" component={North} />
    <Route exact path="/South" component={South} />
    <Route exact path="/West" component={West} />
    <Route exact path="/East"  component={East} />  
  <Redirect to="/" />
    
    </Switch>
  </>
  );
};

export default App;

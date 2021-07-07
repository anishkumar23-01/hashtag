import React from 'react';
import './App.css';
import Signup from './component/Signup'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {ListProvider} from './Context/Context'
function App() {
  return (
    <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div >
          <Link className="navbar-brand" to={"/sign-up"}>Signup -1</Link>
          <Link className="navbar-brand" to={"/sign-upp"}>Signup -2</Link>
          
        </div>
      </nav>
      <Switch>
      
    </Switch>
    <ListProvider>
      <Route exact path='/' component={Signup} />
      <Route exact path='/sign-up' component={Signup} />
      <Route exact path='/sign-upp' component={Signup} />
      </ListProvider>
    </div>
    
    </Router>
  );
  
}

export default App;

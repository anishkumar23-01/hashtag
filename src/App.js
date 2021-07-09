import React from 'react';
import './App.css';
import Signup from './component/Signup'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {ListProvider} from './Context/Context'
function App() {
  return (
    <Router>
    <div className="App">
      
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

import React from 'react';
import './css/osahan.css';
import './App.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Images
import Register from './pages/Register';
import Login from './pages/Login'

function App() {
  return (
    <Router>
    <div>
      

     
     <Switch>
     <Route path="/Login">
       <Login />
     </Route>
     <Route path="/Register">
         <Register/>
    </Route>
    </Switch> 
    </div>
    </Router>
  );
}

export default App;

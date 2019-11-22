import React from 'react';
import './css/custom.css';
import './App.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Images
import Register from './pages/Register';
import Login from './pages/Login';
import Landing from './pages/Landing';
import Index from './pages/index';
import Video from './pages/video';
import History from './pages/history';
import Uploadvid from './pages/uploadvid';
import Categories from './pages/Categories';
import Channels from './pages/Channels';
import ForgetPassword from './pages/ForgetPassword';
import Educators from './pages/Educators';



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
    <Route path="/Landing">
         <Landing/>
    </Route>
    <Route path="/index">
         <Index />
    </Route>
    <Route path="/video">
         <Video/>
    </Route>
    <Route path="/history">
         <History/>
    </Route>
    <Route path="/uploadvid">
         <Uploadvid/>
    </Route>
    <Route path="/categories">
         <Categories/>
    </Route>
    <Route path="/channels">
         <Channels />
    </Route>
    <Route path="/forgetpassword">
         <ForgetPassword/>
    </Route>
    <Route path="/Educators">
         <Educators/>
    </Route>
    </Switch> 
    </div>
    </Router>
  );
}

export default App;

import React from 'react'
//import AboutMe from './AboutMe';
import './App.css';
import Home from "./components/Home"
import ContactMe from './ContactMe';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"
import AboutMe from './AboutMe';
import Header from './components/Header/Header';
import Resume from './components/Resume';

class App extends React.Component{
  
  render(){
      return(
        <Router>
        <div>
        <Header/>
          <Switch/>
              <Route path="/" exact component={Home}/>
              <Route path="/contactme" component={ContactMe}/>
              <Route path="/aboutme" component={AboutMe}/>
              <Route path="/resume" component={Resume}/>
          <Switch/>
        </div>
        
        </Router>
      )

    }
  }

export default App;

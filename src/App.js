import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './header';
import Footer from './footer';
import Home from './home';
import About from './about';

class App extends Component {
  render(){
    return (
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>          
        </Switch>
        <Footer/>
      </Router>
    );
 }
}
export default App;

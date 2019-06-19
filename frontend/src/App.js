import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import React, { Component } from 'react';
import './App.css';
import Header from "./components/header"
import Footer from "./components/footer"
import Main from "./containers/mainContainer"
import Wof from "./components/wallOfFameScreen"


export default class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/wof" component={Wof} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }

}

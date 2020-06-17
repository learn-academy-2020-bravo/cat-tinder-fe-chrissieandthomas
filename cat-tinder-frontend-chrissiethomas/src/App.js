import React, { Component }from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import NewCat from './pages/NewCat'
import cats from './cats'

class App extends Component {
  constructor(){
    super()
      this.state= {
        allCats: cats
      }
  }
  render() {
    return(
        <Router>
        <Header />
          <Switch>
            <Route exact path="/" render={ (props) => <CatIndex cats={ this.state.allCats } /> } />
            <Route exact path="/catshow" render={ (props) => <CatShow cats={ this.state.allCats } /> } />
            <Route exact path="/createcat" render={ () => <NewCat /> } />
          </Switch>
        </Router>
    )}
}

export default App

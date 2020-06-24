import React from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import CatIndex from './pages/CatIndex'
import NewCat from './pages/NewCat'

const App = () => {
    return(
        <Router>
        <Header />
          <Switch>
            <Route exact path="/" render={ () => <CatIndex/> } />
            <Route exact path="/newcat" render={ () => <NewCat /> } />
          </Switch>
        </Router>
    )
}

export default App;

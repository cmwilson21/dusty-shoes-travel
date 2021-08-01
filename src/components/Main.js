import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import TravelList from './TravelList'
import TravelForm from './TravelForm'
import NavBar from './NavBar'
import BeenThereList from './BeenThereList'


const Main = () => {


  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/new">
            <TravelForm />
          </Route>
          <Route exact path="/travel-list">
            <TravelList />
          </Route>
          <Route exact path="/been-there">
            <BeenThereList />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default Main

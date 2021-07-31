import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import TravelList from './components/TravelList'
import TravelForm from './components/TravelForm'
import NavBar from './components/NavBar'
import BeenThereList from './components/BeenThereList'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/new" component={TravelForm} />
          <Route exact path="/travel-list" component={TravelList} />
          <Route exact path="/been-there" component={BeenThereList}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

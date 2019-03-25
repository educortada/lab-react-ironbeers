import React, { Component } from 'react';

// CSS
import 'bulma/css/bulma.css'
import './App.css';

// Pages
import Home from './pages/Home'
import BeersList from './pages/BeersList'
import BeerDetail from './pages/BeerDetail'
import RandomBeer from './pages/RandomBeer'

// Components
import Navbar from './components/Navbar'

// Router
import { Route } from 'react-router-dom'

class App extends Component {
  render() {

    return (
      <React.Fragment>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/beers' component={BeersList} />
        <Route path='/beer/:id' component={BeerDetail} />
        <Route path='/random-beer' component={RandomBeer} />
      </React.Fragment>
    )
  }
}

export default App;

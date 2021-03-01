import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import './css/reset.css';
import './css/App.css';

import Home from './components/Home';
import Error from './components/Error';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      vehicles: []
    }
  }

  componentDidMount() { // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch(`https://swapi.dev/api/vehicles/`)
      .then(response => response.json())
      .then(json => this.setState({ vehicles: json.results }))
  }


  render() {
    return (
      <div className="App">
        <h1>Star Wars Vehicles All</h1>
        <Router>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
          <hr /> {/* oh nifty! a "horizontal row"! */}
          <ul>
            <li><a href="/vehicle/4">Sand Crawler</a></li>
            <li><a href="/vehicle/6">T-16 skyhopper</a></li>
            <li><a href="/vehicle/7">X-34 landspeeder</a></li>
            <li><a href="/vehicle/8">TIE/LN starfighter</a></li>
            <li><a href="/vehicle/14">Snowspeeder</a></li>
            <li><a href="/vehicle/16">TIE bomber</a></li>
            <li><a href="/vehicle/18">AT-AT</a></li>
            <li><a href="/vehicle/19">AT-ST</a></li>
            <li><a href="/vehicle/20">Storm IV Twin-Pod cloud car</a></li>
            <li><a href="/vehicle/24">Sail barge</a></li>
          </ul>
          <hr />

          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/vehicle/:vehicleID" render={({ match }) => {
              return (
                <h2>Vehicle ID: {match.params.vehicleID}</h2>
              )
            }} />

            <Route component={Error} />
          </Switch>
        </Router>
      </div >
    );
  }
}

export default App;
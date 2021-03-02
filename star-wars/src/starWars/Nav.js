import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';

class Nav extends Component {
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
      <ul>
        {this.state.vehicles.map((vehicle, index) => {
          const id = vehicle.url.split('/')[5]
          return (
            <li key={index}> {/*// this is not best practice, no? */}
              <NavLink // adds a bit syntactic sugar, and ability to indicate certain differences from vanilla "<Link></Link>" 
                activeStyle={{fontWeight: 'bold'}}
                to={`/vehicle/${id}`}
              >
                {vehicle.name}
              </NavLink>
            </li>
          )
        }
        )}
      </ul>
    );
  }
}

export default Nav;
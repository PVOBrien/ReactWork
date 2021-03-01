import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'; // "as" is setting "router" as  alias

import ShowButton from './ShowButton';
import NewCard from './NewCard.js';
import InputEvents from './events/InputEvents';
import FormValidation from './formValidation/FormValidation';
import ShoppingList from './shoppingList/ShoppingList';
import AddressBook from './addressBook/AddressBook';
import ThisCardwHooks from './addressBook/singleCard_wHooks';
import './css/reset.css';
import './css/default.css';
import './css/app.css';
import './css/newCard.css'; // it's CSS. it imports it all, no need to designate exactly *what* is being imported.

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      authenticated: false
    }

    this.doLogIn = this.doLogIn.bind(this);
    this.doLogOut = this.doLogOut.bind(this);
  }

  doLogIn() {
    this.setState({
      authenticated: true
    })
  }

  doLogOut() {
    this.setState({
      authenticated: false
    })
  }

  render() {
    return (
      <>
        <div className="App">
          <h1>Hello World!</h1>
          <Router>
            <ul>
              <li><Link to="/">Route message:Clear</Link></li>
              <li><Link to="/home">Home Slice</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/about/123">About ME</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>

            <Switch>

              <Route exact path="/home" render={() => {
                return (
                  this.state.authenticated ? (
                    <Redirect to="/account" />
                  ) : (
                      <>
                        <Home />
                        <p>Log in here!</p>
                        <button onClick={this.doLogIn}>Log In</button>
                      </>
                    )
                )
              }} />

              <Route path="/account" render={() => {
                return (
                  this.state.authenticated ? (
                    <>
                    <Home />
                    <p>You are Legit!</p>
                    <button onClick={this.doLogOut}>Log out</button>
                    </>
                  ) : (
                    <Redirect to="/home" />
                  )
                )
              }}>

              </Route>


              {/* <Route exact path="/home" component={Home} /> */}
              {/* TODO: is "exact" necessary? */}
              <Route exact path="/" render={() => { // / either use Switch, or exact path. Switch: specific comes before broad. Exact path: (atm) I don't think has that qualification.
                return <p>clear a path!</p> // so... ALWAYS include an actual path on the route. Or use "exact" in front of path?.
              }} />

              <Redirect from="/about/:userId" to="/info/:userId" />  {/* easiest to have most exact routes above more generic routes */}
              <Route path="/info/:userId" component={About} />

              <Redirect from="/about" to="info" />
              <Route path="/info" component={About} />

              <Route path="/contact" component={Contact} />
              <Route render={() => {
                return <h2>Error. No such path. Try again.</h2>
              }} />
            </Switch>

          </Router>

          {/* <ShowButton /> */}
          <ThisCardwHooks />
          {/* <AddressBook /> */}
          {/* <NewCard /> */}
          <InputEvents />
          {/* <FormValidation /> */}
        </div>
        <div>
          <ShoppingList />
        </div>
      </>
    );
  }
}

export default App;

// https://reactrouter.com/web/guides/quick-start
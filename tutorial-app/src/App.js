import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; // "as" is setting "router" as  alias

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


function App() {
  return (
    <>
      <div className="App">
        <h1>Hello World!</h1>
        <Router>
          <ul>
            <li><Link to="/">Route message:Clear</Link></li>
            <li><Link to="/home">Home Slice</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/about/paramUserIdHere">About ME</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          <Switch>

            <Route path="/home" component={Home} />
            <Route exact path="/" render={() => {
              return <br></br> // so... ALWAYS include an actual path on the route. Or use "exact" in front of path?.
            }} />

            <Route path="/about/:userId" render={({ match }) => { // either use Switch, or exact path. on switch, the specific comes before the broad, and exact path (atm) I don't think has that qualification.
              return <h2>Me 3 "{match.params.userId}"" Me </h2> // check out how it follows the params.
            }} />

            <Route path="/about" component={About}/>
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

export default App;

// https://reactrouter.com/web/guides/quick-start
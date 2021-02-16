import logo from './logo.svg';
import './App.css';

import NewCard from './NewCard.js';
import './newCard.css'; // it's CSS. it imports it all, no need to designate exactly *what* is being imported.

function App() {
  return (
    <div className="App">
      <NewCard />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit this <code>src/App.js</code> Hello Then and Now!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

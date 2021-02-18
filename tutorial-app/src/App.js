import './App.css';

import NewCard from './NewCard.js';
import InputEvents from './events/InputEvents';
import './events/Events.css'
import './newCard.css'; // it's CSS. it imports it all, no need to designate exactly *what* is being imported.

function App() {
  return (
    <div className="App">
      <NewCard />
      <InputEvents />
    </div>
  );
}

export default App;

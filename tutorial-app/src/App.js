import './App.css';

import ShowButton from './ShowButton';
import NewCard from './NewCard.js';
import InputEvents from './events/InputEvents';
import FormValidation from './formValidation/FormValidation';
import './events/Events.css'
import './newCard.css'; // it's CSS. it imports it all, no need to designate exactly *what* is being imported.

function App() {
  return (
    <div className="App">
      {/* <ShowButton /> */}
      <NewCard />
      {/* <InputEvents /> */}
      <FormValidation />
    </div>
  );
}

export default App;

import ShowButton from './ShowButton';
import NewCard from './NewCard.js';
import InputEvents from './events/InputEvents';
import FormValidation from './formValidation/FormValidation';
import ShoppingList from './shoppingList/ShoppingList';
import AddressBook from './addressBook/AddressBook';
import ThisCardwHooks from './addressBook/singleCard_wHooks';
import './css/reset.css';
import './css/app.css';
import './css/newCard.css'; // it's CSS. it imports it all, no need to designate exactly *what* is being imported.

function App() {
  return (
    <>
      <div className="App">
        {/* <ShowButton /> */}
        <ThisCardwHooks/>
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

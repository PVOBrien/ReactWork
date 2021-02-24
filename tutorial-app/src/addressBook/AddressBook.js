import React, { Component } from 'react';
import ThisCard from './singleCard';

class AddressBook extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: [
        {
          fullName: 'The Rock',
          initials: 'TR',
          favorite: false,
          phone: '111-111',
          email: 'cooking@gmail.com'
        },
        {
          fullName: 'Bobby Bucheh',
          initials: 'TF',
          favorite: false,
          phone: '12345',
          email: 'bossypants@gmail.com'
        },
        {
          fullName: 'Jim Henson',
          initials: 'TR',
          favorite: true,
          phone: '5432',
          email: 'muppets@outlook.com'
        }
      ]
    }

    this.handleFavoriteToggle = this.handleFavoriteToggle.bind(this)

  }
// how to update child/parent class... (DON'T FORGET TO BIND!!!)
  handleFavoriteToggle(contactIndex) { // 1. define function, pass in index
    const newContactsState = [...this.state.contacts] // 2. brings in all array of items to be possibly updated.
    newContactsState[contactIndex] = {
      ...newContactsState[contactIndex], // 3. brings in all items of specific item to be updated
      favorite: !newContactsState[contactIndex].favorite // 4. updates specific property of item to be updated.
    }

    this.setState({ // 5. sets the state all over w the new stuff.
      contacts: newContactsState
    })
  } // TODO: DID YOU REMEMBER TO ADD BINDING TO THE CONSTRUCTOR?

  componentDidUpdate(prevProps, prevState){
    const prevStateString = JSON.stringify(prevState.contacts)
    const updatedStateString = JSON.stringify(this.state.contacts)

    if (prevStateString !== updatedStateString) {
      console.log("Save it: " + updatedStateString)
      localStorage.setItem('contacts', updatedStateString)
    }
  }

  componentDidMount(){
    const savedStateFromLocalStorage = localStorage.getItem('contacts')

    if (savedStateFromLocalStorage) {
        this.setState({
          contacts: JSON.parse(savedStateFromLocalStorage)
        })
    }
  }

  render() {

    const {
      contacts
    } = this.state

    return (
// it currently seems that <React.Fragment> and <> are the same. time will tell...
      <>
        {/* <h1>Address Book</h1> */}
        { !contacts.length && <p>No contact to show.</p> }
        {contacts.map((singleContact, index) => {
          return (

            <ThisCard
              contact={singleContact}
              index={index}
              handleFavoriteToggle={this.handleFavoriteToggle}
              key={index} // This doesn't get "passed in", rather it just knows that it is now the index for this card. #ok.
            />
          )
        })}
      </>
    )
  }

}

export default AddressBook;
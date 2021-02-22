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
              key={index} // This doesn't get "passed in", rather it just knows that it is now the index for this card. #ok.
            />
          )
        })}
      </>
    )
  }

}

export default AddressBook;
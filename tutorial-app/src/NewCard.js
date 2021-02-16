import React, { Component } from 'react';

class NewCard extends Component {
  constructor(props){
    super(props)

    this.state =  {
      theName: 'Paul Vincent O\'Brien',
      initials: 'PVO',
      info: [
        { title: 'Bday: ', text: ' April 5th, 1984' },
        { title: 'Address', text: ' 1108 Mill Creek Blvd' },
        { title: 'Phone: ', text: ' 253-656-1883' }
      ]
    }
  }
  render() {
    const {
      initials,
      info,
      theName
    } = this.state;

    return (
      <React.Fragment>
        <section className="new-card-container">
          <header>
            <span initials={initials}></span>
            <h2>{theName}</h2>
          </header>

          <main>
            <ul>
              <li><span> {info[0].title} </span> {info.[0].text} </li>
              <li><span>Address:</span> 1108 Mill Creek Blvd</li>
              <li><span>Ph No:</span> 1.253.656.1883</li>
            </ul>
          </main>
        </section>
      </React.Fragment>
    )
  }
}

export default NewCard;
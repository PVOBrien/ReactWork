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
        { title: 'Phone: ', text: ' 253-656-1883' },
        { title: 'Email: ', text: ' PVOVideo@outlook.com'}
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
        <section className="new-card-container" id="profile-card">
          <header>
            <span initials={initials}></span>
            <h2>{theName}</h2>
          </header>

          <main>
            <ul>
              {info.map((row, index) => {
                return (
                  <li key={index}>
                    <span>{row.title}</span>
                    { row.text ? row.text : 'N/A' } {/* oh yeah. */}
                  </li>
                )
              })}
            </ul>
          </main>
        </section>
      </React.Fragment>
    )
  }
}

export default NewCard;
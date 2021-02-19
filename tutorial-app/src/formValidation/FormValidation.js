import React, { Component } from "react";

class FormValidation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      feedback: '',
      acceptedTerms: false,
      validationErrors: {},
      submitted: 0
    }

    this.validateAllTheField = this.validateAllTheField.bind(this)

  }

  handleOnChange = (e) => { // this is the "catch all" for handleOnChange setState
    const target = e.target; // lol practically unnecessary, but proves a point on next line...
    const name = target.name; // look, it's the name! :P
    const value = (
      target.type === 'text' ? target.value : target.checked // this is tricky, checking what type it is, and figuring out the right falsy-ness.
    )

    this.setState({
      [name]: value
    })

  }

  handleOnSubmit = (e) => {
    e.preventDefault();

    this.validateAllTheField()
  }

  validateAllTheField() {
    const { // pulling in and storing state as variables
      firstName,
      feedback,
      acceptedTerms
    } = this.state

    const errors = {}

    if (!firstName) { // so, if there's no first name then...
      errors['firstName'] = 'UNFILLED!';
    }

    if (!feedback) {
      errors['feedback'] = 'Gimme FeedBaCk';
    }

    if (!acceptedTerms) {
      errors['acceptedTerms'] = 'Haven\'t. Need to.';
    }

    this.setState({
      validationErrors: errors
    })
  }


  render() {
    return (
      <>
        <section className="new-card-container">
          <header>
            <h2>Form Submissions: </h2>
          </header>
          <main>
            <form onSubmit={this.handleOnSubmit}>
                <div className="error"> {this.state.validationErrors.firstName} </div>
              <label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name Here"
                  value={this.state.firstName}
                  onChange={this.handleOnChange} // if something is going to be mutable/modifiable/changeable, it (atm) MUST have an onChange method.
                />
              </label>
              <br></br>
              <label>
                <div className="error"> {this.state.validationErrors.feedback} </div>
                <input
                  type="text"
                  name="feedback"
                  placeholder="Placeholder"
                  value={this.state.feedback}
                  onChange={this.handleOnChange}
                />
              </label>
              <br></br>
              <label>
                <input
                  type="checkbox"
                  name="acceptedTerms"
                  value={this.state.acceptedTerms}
                  onChange={this.handleOnChange}
                /> Terms: Accepted
              </label>
                <span className="error"> {this.state.validationErrors.acceptedTerms} </span>
              <br></br>
              <button name="submitButton">
                Submit
              </button>
              <p>Times Submitted: {this.state.submitted}</p>
            </form>
          </main>
        </section>
      </>
    )
  }
}

export default FormValidation;
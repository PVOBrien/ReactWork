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
      [name]: value // what do the brackets do here? if brackets aren't included, it does not refer to the variable "name" above.
    })

  }

  handleOnSubmit = (e) => {
    e.preventDefault();

    const isFormValid = this.validateAllTheField();

    if (isFormValid) {
      this.setState((state) => {
        return {
          submitted: state.submitted + 1 // NOT ABLE TO BE ++ incremented. Must be +1ed. why?
        }
      })
    }
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

    if (!feedback) { errors['feedback'] = 'Gimme FeedBaCk'; }

    if (!acceptedTerms) { errors['acceptedTerms'] = 'Haven\'t. Need to.'; }

    this.setState({
      validationErrors: errors
    })

    return Object.keys(errors).length === 0

  }

  render() {

    const {
      firstName: firstNameError,
      feedback: feedbackError,
      acceptedTerms: acceptedTermsError
    } = this.state.validationErrors; // this whole code block allows for truncating otherwise long and needless repetition of object prefixes, instead just holding each in a variable.

    return (
      <>
        <section className="new-card-container" id="form-card">
          <header>
            <h2>Form Submissions: </h2>
          </header>
          <main>
            <form onSubmit={this.handleOnSubmit}>
                <div className="error"> {firstNameError} </div>
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
                <div className="error"> {feedbackError} </div>
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
                <span className="error"> {acceptedTermsError} </span>
              <br></br>
              <button name="submitButton">
                Submit
              </button>
              <p>Times Submitted: {this.state.submitted} </p>
            </form>
          </main>
        </section>
      </>
    )
  }
}

export default FormValidation;
import React, { Component } from "react";

class ShoppingList extends Component {

  // Constructor + state definitions below...

  constructor(props) {
    super(props)

    this.state = {
      listItem: '',
      timesEntered: 0,
      vErrors: {}
    }

    this.vErrorsCheck = this.vErrorsCheck.bind(this)
  }
  // ^^^ constructor + state ^^^
  // ===========================
  // functions, run code below

  handleOnChange = (e) => {
    const target = e.target;
    const name = e.target.name;
    const value = (
      target.type === 'text' ? target.value : target.checked
    )
    
    // console.log("what is value: " + target.value);

    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();

    let trueSubmit = this.vErrorsCheck();

    if (trueSubmit) {
      this.setState((state) => {
        return { timesEntered: state.timesEntered += 1 }
      })
    }
  }

  vErrorsCheck() {
    const errors = {};

    if (!this.state.listItem) {
      errors['noItem'] = 'No Item Entered';
    }

    this.setState({
      vErrors: errors
    })

    return Object.keys(errors).length === 0;
  }


  // ^^^ functions, code ^^^
  // =======================
  // render it out below ===

  render() {
    return (
      <>
        <section id="shopping-list">
          <header>
            <h3>Shopping List</h3>
          </header>
          <main>
            <form onSubmit={this.handleOnSubmit}>
              <div className="error"> {this.state.vErrors.noItem}</div>
              <input
                type="text"
                name="listItem" // this is linked to value. not sure which direction.
                placeholder="Enter item"
                value={this.state.listItem}
                onChange={this.handleOnChange}>
              </input>
              <button name="sLSubmit">
                Submit
                </button>
            </form>
          </main>
          <p>Submitted {this.state.timesEntered} </p>
        </section>
      </>
    )

  }
}

export default ShoppingList;
import React, { Component } from "react";

class ShoppingList extends Component {

  // Constructor + state definitions below...

  constructor(props) {
    super(props)

    this.state = {
      listItem: '',
      enteredListItems: [
        { name: 'N64', id: 'this-1', completed: false },
        { name: 'Sega Genesis', id: 'this-2', completed: true },
        { name: 'Playstation', id: 'this-3', completed: false }
      ],
      vErrors: {},
      timesEntered: 0
    }

    // handleOnChange uses arrow function
    this.handleCompletedToggle = this.handleCompletedToggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    // handleOnSubmit uses arrow function
    this.vErrorsCheck = this.vErrorsCheck.bind(this);

  }
  // ^^^ constructor + state ^^^
  // ===========================
  // functions, run code below

  handleOnChange = (e) => {
    const target = e.target;
    const name = e.target.name;
    const value = target.value;
    // const value = (
    //   target.type === 'text' ? target.value : target.checked
    // )

    // console.log("what is value: " + target.value);

    this.setState({
      [name]: value // why is this not being "returned" like for the if(trueSubmit) code block?
    })
  }

  handleCompletedToggle(e) {
    const target = e.target;
    const itemindexValue = target.attributes.itemindex.value // TODO: build out "target". Makes this all more human readable
    const index = parseInt(itemindexValue, 10) // from video "access buttons custom attributes". Also, this const index is NOT the same as the render index.

    console.log('Tog this: ' + index);

    const tempItemsState = [...this.state.enteredListItems]; // I'm hoping that having to constantly hold a temp state to properly update a state is just showing the inner workings, otherwise there could be a lot of tempState holding.
    tempItemsState[index].completed = target.checked;

    this.setState({
      enteredListItems: tempItemsState
    });
  }


  handleDelete(e) {
    const target = e.target;
    const itemindexvalue = target.attributes.itemindex.value
    const index = parseInt(itemindexvalue, 10) // from video "access buttons custom attributes"

    console.log('DEL this: ' + index);

    const tempItemsState = [...this.state.enteredListItems];
    tempItemsState.splice([index], 1);

    this.setState({
      enteredListItems: tempItemsState
    });

  }

  handleOnSubmit(e) {
    e.preventDefault();

    console.log("Attributes: " + e);

    let trueSubmit = this.vErrorsCheck();

    if (trueSubmit) {

      const newItem = {
        completed: false,
        name: this.state.listItem
      }

      this.setState((state) => {
        return {
          timesEntered: state.timesEntered += 1, // why is "return" necessary? because it's in a deeper code block (e.g. the "if..."" statement?)? must be?
          enteredListItems: [...state.enteredListItems, newItem] // the "..." must be a nifty way to just be to include everything in that array into the new/next/temp array, then do whatever to it/with it.
        }
      })
    }
  }

  vErrorsCheck() {
    const errors = {};

    if (!this.state.listItem) {
      errors['noItem'] = 'No Item Entered';
      // add a random setState() here, see if it needs to be w/in a return statement.
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

    const {
      enteredListItems
    } = this.state // this all basically prepends what is after the equal sign to what is in the preceeding code block. 

    return (
      <>
        <section id="shopping-list">
          <header>
            <h3>Shopping List</h3>
          </header>
          <main>
            {!enteredListItems.length && <p>The list is empty</p>} {/* super weird that it's truthiness is so built in. Like... the second statement is true by definition. TODO: write it out as a fully fledged if() statement. */}
            <ul>
              {
                enteredListItems.map((item, index) => {
                  return (
                    <li
                      key={item.id} // key is "hidden" to html. doesn't show up in elements of browser console. Also using the item's ID, *NOT* the index because "this JSX is a little more complex..." video2.3 @2:27
                      className={item.id} // className == class (css), and does show up in browser console elements.
                    >
                      <input
                        type="checkbox"
                        checked={item.completed} // this is boolean. checked/unchecked
                        onChange={this.handleCompletedToggle}
                        itemindex={index} //alllowercase 'itemindex" because REACT DOCS. ???
                      />
                      <span>{item.name}</span>
                      <button
                        itemindex={index}
                        onClick={this.handleDelete}
                      >
                        X</button>
                    </li>
                    // {console.log("what is item: " + item); } TODO: no way to console in render?
                  )
                })
              }
            </ul>
            <form onSubmit={this.handleOnSubmit}>
              <div className="error"> {this.state.vErrors.noItem}</div>
              <input
                type="text"
                name="listItem" // this is linked to value. not sure which direction. not yet certain why it's necessary or just assumed that name is value.
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
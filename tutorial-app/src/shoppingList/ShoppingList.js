import React, { Component } from "react";

class ShoppingList extends Component {
  // Constructor + state definitions below...
  constructor(props) {
    super(props)

    this.state = {
      listItem: '',
      enteredListItems: [
        { name: 'N64', thisId: 'this-1', completed: false },
        { name: 'Sega Genesis', thisId: 'this-2', completed: true },
        { name: 'Playstation', thisId: 'this-3', completed: false }
      ],
      vErrors: {},
      timesEntered: 0
    }

    // handleOnChange uses arrow function
    this.handleCompletedToggle = this.handleCompletedToggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    // handleOnSubmit *used* arrow function. NOTE: Tried to use an arrow function on this, and did not work. So: *something* is different between the two, they are not 100% interchangeable (to me, yet). Or I just had something coded wrong. Maybe used "this" when i should've used "e". :shrug:
    this.vErrorsCheck = this.vErrorsCheck.bind(this);
  }
  // ^^^ constructor + state ^^^
  // ===========================
  // functions, run code below

  componentDidUpdate(prevProps, prevState) { // this runs whenever "this" component (aka class? state?) updates. Doesn't necessarily run anything, just whenever there is a change (of state), it offers a chance to do something with it. So it is not AN update, just that something WAS updated.
    const prevStateJson = JSON.stringify(prevState.enteredListItems);
    const updatedStateJson = JSON.stringify(this.state.enteredListItems)

    if (prevStateJson !== updatedStateJson) {
      console.log("Saving... " + updatedStateJson)
      localStorage.setItem('listItems', updatedStateJson)
    }
  }

  componentDidMount() {
    const savedStatefromLS = localStorage.getItem('listItems');

    if (savedStatefromLS) { // it's a null check!
      this.setState({
        enteredListItems: JSON.parse(savedStatefromLS) // weirds me out that it is ":" and not "=" to assign/set/define properties.
      })
    }
  }


  handleOnChange = (e) => {
    const target = e.target;
    const name = e.target.name;
    const value = target.value;
    // const value = (
    //   target.type === 'text' ? target.value : target.checked
    // )

    console.log("what is value: " + target.value);

    this.setState({
      [name]: value // why is this not being "returned" like for the if(trueSubmit) code block?
    })
  }

  handleCompletedToggle(e) {
    const target = e.target;
    const itemindexValue = target.attributes.itemindex.value // Makes this all more human readable
    const index = parseInt(itemindexValue, 10) // from video "access buttons custom attributes". Also, this const index is NOT the same as the render index.

    // console.log('Tog this: ' + index);

    const tempItemsState = [...this.state.enteredListItems]; // I'm hoping that having to constantly hold a temp state to properly update a state is just showing the inner workings, otherwise there could be a lot of tempState holding. The "..." is "spread" syntax ES6
    // tempItemsState[index].completed = target.checked; // and in 2.4 1:37, do find that this method is bad at best...

    tempItemsState[index] = { // this whole thing is like AWS.mutate, but all "local"/client-side. In AWS, it's pulled down (the data), then we hold it "in state", then we make modifications to it, *then* upload it for it to be changed. 
      ...tempItemsState[index], // must be included (here, at least) in order to pull in all properties/state of the object in question...
      completed: target.checked // then this (and whatever else is after the first parameter), modifies/updates the object.
    }

    // console.log(tempItemsState);

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
        name: this.state.listItem,
        thisId: 'itemID-' + Date.now() // better way. the method below WOULD (not might) get seriously screwed up upon deleting and adding entries. The Date method ensures - save for time travel exceptions - that all new IDs will be unique. No moment is ever the same! 
        // thisId: this.state.enteredListItems.length+1 // watch out for "off-by-1" TODO: also 1) the tutorial does not cover this, and 2) React's console for this omission is pretty terrible "key doesn't exist" basically, didn't say where, or what, or which. Thanks to Michael Eclavia https://github.com/MichaelEclavea for the help. 
      }

      this.setState((state) => {
        return {
          timesEntered: state.timesEntered += 1, // why is "return" necessary? because it's in a deeper code block (e.g. the "if..."" statement?)? must be?
          enteredListItems: [...state.enteredListItems, newItem], // the "..." must be a nifty way to just be to include everything in that array into the new/next/temp array, then do whatever to it/with it.
          listItem: ''
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
                    <li key={item.thisId}
                      // key={item.id} // key is "hidden" to html. doesn't show up in elements of browser console. Also using the item's ID, *NOT* the index because "this JSX is a little more complex..." video2.3 @2:27
                      className={"shopping-list-entry"} // className == class (css), and does show up in browser console elements.
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
                        X
                        </button>
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
            <p>Submitted {this.state.timesEntered} </p>
          </main>
        </section>
      </>
    )
  }
}

export default ShoppingList;
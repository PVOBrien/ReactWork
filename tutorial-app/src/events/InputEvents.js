import React, { Component } from "react";

class InputEase extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mouseDown: false,
      mouseClicked: 0,
      inputText: 'Hellow There!',
      formInputText: 'And again again.',
      mousePositionX: 0,
      mousePositionY: 0,
      windowScrollY: 0
    }

    // this.handleOnClick = this.handleOnClick.bind(this) // this is same as Moused Here onClick bind method.
    this.handleHereMouseToDown = this.handleHereMouseToDown.bind(this);
    this.handleHereOnMouseUp = this.handleHereOnMouseUp.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleTheSubmit = this.handleTheSubmit.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    this.setState({
      windowScrollY: window.scrollY
    })
  }

  hereToClick() { // like any normal function
    console.log('Click In Function');
    // this.setState({
    //   mouseClicked: this.state.mouseClicked + 1
    // })
    console.log(`Before setState ${this.state.mouseClicked}`);
    this.setState((state) => {
      return {
        mouseClicked: state.mouseClicked + 1
      }
    })
  }

  handleHereMouseToDown() { // DON'T FORGET TO BIND.
    console.log('_DOWN_');
    this.setState({
      mouseDown: true
    })
  }

  handleHereOnMouseUp() {
    console.log('*up*');
    this.setState({
      mouseDown: false
    })
  }

  handleOnChange(event) {
    this.setState({
      inputText: event.target.value // to get the things inputtetetted.
    })
  }

  handleTheSubmit(event) { // https://reactjs.org/docs/forms.html
    event.preventDefault();
    this.setState({
      formInputTextSubmitted: this.state.formInputText
    })
  }

  handleTheChangeForm = (e) => { // using arrow function removes need of binding, as it straight passes "it" all in. So... "it" is what "it" is.
    this.setState({
      formInputText: e.target.value
    })
  }

  handleMouseMove = (e) => {
    this.setState({
      mousePositionX: e.nativeEvent.offsetX,
      mousePositionY: e.nativeEvent.offsetY
    })
  }

  render() {
    return (
      <>
        <section>
          <header>
            <h3>Moused Here:</h3>
          </header>
          <main>
            <button
              id="insert"
              onClick={this.hereToClick.bind(this)}
              onMouseDown={this.handleHereMouseToDown} // left side of equal sign is the function, it is NOT potato.
              onMouseUp={this.handleHereOnMouseUp} > {/* how to call class function */}
          CLICKEE
          </button>
            <p>Button down: {this.state.mouseDown ? 'true' : 'false'} </p>
            <p>Button, CLICK: {this.state.mouseClicked} </p>
          </main>
        </section>

        <section>
          <header>
            <h3>HOWDY</h3>
          </header>
          <main>
            <input
              type="text"
              onChange={this.handleOnChange}
            />
            <p>Inputted: {this.state.inputText}</p>
          </main>
        </section>

        <section>
          <div>
            <header>
              <h3> Window Scroll Position (Y):</h3>
            </header>
            <main>
              <p>y: {this.state.windowScrollY}</p>
            </main>
          </div>
        </section>

        <section>
          <header>
            <h3>Form Submit events:</h3>
          </header>
          <main>
            <form onSubmit={this.handleTheSubmit}>
              <input
                type="text"
                value={this.state.formInputText}
                onChange={this.handleTheChangeForm}
              />
              <button type="submit">Submit</button>
              <p>Input value: {this.state.formInputText}</p>
              <p>Submitted value: {this.state.formInputTextSubmitted}</p>
            </form>
          </main>
        </section>

        <section>
          <div onMouseMove={this.handleMouseMove}>
            <header>
              <h3>Mouse Position: </h3>
            </header>
            <main>
              <p>x: {this.state.mousePositionX}</p>
              <p>y: {this.state.mousePositionY}</p>
            </main>
          </div>
        </section>

      </>
    )
  }
}

export default InputEase;
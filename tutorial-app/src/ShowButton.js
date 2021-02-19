import React, { Component } from "react";

class ShowButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      here: false
    }
  }

  handleDeetsClick = () => {
    console.log("here.")
    // https://www.telerik.com/blogs/how-to-show-and-hide-elements-in-react#:~:text=%20How%20to%20Show%20and%20Hide%20Elements%20in,value%20is%20true%20and%20there%20is...%20More
  }

  render() {
    return (
      <>
        <section>
              <header>
                <h3>CHECK IT</h3>
                </header>
          <main>
            <div id="buttonEr">
              <button className="toggles"
                onClick={this.handleDeetsClick}>
                For My Deets
              </button>
              <button className="toggles">The Basics</button>
            </div>
          </main>
        </section>
      </>
    )
  }

}

export default ShowButton;
import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick = () => {
    alert("Hello BC15");
  };
  handleClick2 = (name) => {
    alert("Hello " + name);
  };
  showMessage = (mess) => {
    alert(mess);
  };
  render() {
    return (
      <div className="container">
        <div>Handle Event</div>
        <button id="btn" onClick={this.handleClick}>
          Click me!
        </button>
        <br />
        <br />
        <button
          className="btn btn-success"
          onClick={() => {
            alert("Hello Si Dep Trai");
          }}
        >
          Show message
        </button>
        <hr />

        <button id="btn" onClick={this.handleClick2.bind(this, "Joseph")}>
          Click Me 2!
        </button>
        <hr />
        <button
          id="btn"
          onClick={() => {
            this.showMessage("Hello BC 15");
          }}
        >
          Show Message 2
        </button>
      </div>
    );
  }
}

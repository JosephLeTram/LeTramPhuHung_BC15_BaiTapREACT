import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div>
        <h1 class="display-5 fw-bold">A warm welcome!</h1>
        <p class="fs-4">
          Bootstrap utility classes are used to create this jumbotron since the
          old component has been removed from the framework. Why create custom
          CSS when you can use utilities?
        </p>
        <a class="btn btn-primary btn-lg" href="#!">
          Call to action
        </a>
      </div>
    );
  }
}

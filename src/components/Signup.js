import React, { Component } from 'react';
import SignupForm from "./SignupForm";

export class Signup extends Component {
  render() {
    return (
      <div data-test="component-signup">
        <SignupForm />
      </div>
    )
  }
}

export default Signup

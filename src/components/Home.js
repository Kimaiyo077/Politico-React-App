import React, { Component } from 'react';
import HomePage from '../layout/HomePage';


export class Home extends Component {
  render() {
    return (
      <div data-test="component-home">
        <HomePage />
      </div>
    )
  }
}

export default Home

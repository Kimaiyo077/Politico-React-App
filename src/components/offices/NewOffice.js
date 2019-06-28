import React, { Component } from 'react';
import AddOffice from '../../containers/AddOffice';

class NewOffice extends Component {
  render() {
    return (
      <div data-test="component-newoffice">
        <AddOffice />
      </div>
    )
  }
}

export default NewOffice;

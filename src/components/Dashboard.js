import React, { Component } from 'react';
import DashPage from '../layout/DashPage';


class Dashboard extends Component {
  render() {
    return (
      <div data-test="component-dashboard">
        <DashPage />
      </div>
    )
  }
}

export default Dashboard

import React, { Component } from 'react'
import PartiesPage from  '../../containers/PartiesPage';

export class Parties extends Component {
    render() {
        return (
            <div data-test="component-party">
                <PartiesPage />
            </div>
        )
    }
}

export default Parties

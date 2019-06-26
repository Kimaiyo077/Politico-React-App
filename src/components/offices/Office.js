import React, { Component } from 'react';
import Offices from '../../containers/Offices';

class Office extends Component {
    render() {
        return(
            <div data-test="component-offices">
                <Offices />
            </div>
        )
    }
}

export default Office;

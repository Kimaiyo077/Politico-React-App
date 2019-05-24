import React, { Component } from 'react';
import Offices from '../layout/Offices';

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

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import  { fetchParties } from '../redux/actions/getActions';

export class PartiesPage extends Component {
    componentWillMount(){
        this.props.fetchParties();
    }
    
    render() {
        const partyItems = this.props.items.map(({partyName, logoUrl, hqAddress, partyId}) => (
            <li key={partyId}>
                <h2>{partyName}</h2>
                <img src={logoUrl} alt="party image"/>
                <h4>Hq Address</h4>
                <h3>{hqAddress}</h3>
            </li>
        ));
        return (
            <div data-test="component-party">
                <header className="dashheader">
                    <nav>
                        <ul className="nav-bar">
                            <li className="nav-item"><Link to="/dashboard">Home</Link></li>
                            <li className="nav-item"><Link to="parties">Parties</Link></li>
                            <li className="nav-item"><Link to="offices">Offices</Link></li>
                            <li className="nav-item"><a href="interest.html">Interest</a></li>
                            <li className="nav-item"><a href="votes.html">Your Votes</a></li>
                            <li className="nav-item"><Link to="/login">Logout</Link></li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <section className="section-a">
                        <div className="grid-body">
                            <h3 id="message"></h3>
                            <ul id="content" className="content-body">
                                { partyItems }
                            </ul>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    items: state.parties.parties
  });

export default connect(mapStateToProps, { fetchParties })(PartiesPage);

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchOffices } from '../redux/actions/postActions'

class Offices extends Component {
  componentWillMount() {
    this.props.fetchOffices();
  }

  render() {
    const officeItems = this.props.items.map(({officeName, officeType, officeId}) => (
      <li key = {officeId}>
          <h2><span>Office: </span>{officeName}</h2>
          <h2><span>Type: </span>{officeType}</h2>
          <i className="fas fa-vote-yea fa-10x"></i>
          <button type="button" name="name1" ><i className="fas fa-list-ul"></i> List Candidates</button>
          <button type="button" name="1name" ><i className="fas fa-vote-yea"></i> Cast Vote</button>
          <button type="button" name="name" ><i className="fas fa-poll"></i> Office Polls</button>
      </li>
    ));
    return (
      <div>
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
                        { officeItems }
                    </ul>
                </div>
            </section>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.offices.offices
});

export default connect(mapStateToProps, { fetchOffices })(Offices);
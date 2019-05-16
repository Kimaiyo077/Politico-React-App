import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Offices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offices: []
    };
  }
  componentDidMount() {
    fetch(`https://isaac-politico-api-heroku.herokuapp.com/api/v2/offices`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 200) {
          this.setState({ offices: data.data });
        } else {
          displayError(data.error);
          console.log(data.status);
        }
      })
      .catch(error => {
        displayError("Please check your connection");
      });
  }
  render() {
    const { offices } = this.state;
    return (
      <div>
          <header className="dashheader">
            <nav>
                <ul className="nav-bar">
                    <li className="nav-item"><Link to="/dashboard">Home</Link></li>
                    <li className="nav-item"><a href="political_parties.html">Parties</a></li>
                    <li className="nav-item"><Link to="offices">Offices</Link></li>
                    <li className="nav-item"><a href="interest.html">Interest</a></li>
                    <li className="nav-item"><a href="votes.html">Your Votes</a></li>
                    <li className="nav-item"><Link to="/login">Logout</Link></li>
                </ul>
            </nav>
        </header>
          <main>
            <section class="section-a">
                <div class="grid-body">
                    <h3 id="message"></h3>
                    <ul id="content" class="content-body">
                    {offices.map(office => (
                        <li>
                            <h2><span>Office: </span>{office.officeName}</h2>
                            <h2><span>Type: </span>{office.officeType}</h2>
                            <i class="fas fa-vote-yea fa-10x"></i>
                            <button type="button" name="name1" ><i class="fas fa-list-ul"></i> List Candidates</button>
                            <button type="button" name="1name" ><i class="fas fa-vote-yea"></i> Cast Vote</button>
                            <button type="button" name="name" ><i class="fas fa-poll"></i> Office Polls</button>
                        </li>
                    ))}
                    </ul>
                </div>
            </section>
        </main>
      </div>
    );
  }
}

export default Offices;
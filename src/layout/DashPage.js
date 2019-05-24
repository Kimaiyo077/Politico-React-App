import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/dashboard.css';
import '../styles/style.css';


export default function DashPage() {
    let name = localStorage.getItem('name')
    let email = localStorage.getItem('email')
    let id = localStorage.getItem('nationalId')
    let url = localStorage.getItem('passportUrl')
  return (
    <div data-test="component-dashpage">
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
            <section className="section-a">
                <div className="content-title">
                    <h3>
                        Your Information
                    </h3>
                </div>
                <div className="grid-body">
                    <ul className="content-body" id="content">
                    <li>
                        <img src={url} alt="passport"/>
                        <p><span>Name: </span>{ name }</p>
                    </li>
                    <li>
                        <i className="fas fa-id-card fa-10x"></i>
                        <p><span>ID Number:</span>{ id }</p>
                    </li>
                    <li>
                        <i className="fas fa-envelope fa-10x"></i>
                        <p><span>Email: </span>{ email }</p>
                    </li>
                    </ul>
                </div> 
            </section>
        </main>
    </div>
  )
}

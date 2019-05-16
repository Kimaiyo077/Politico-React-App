import React from 'react';
import '../styles/dashboard.css';
import '../styles/style.css';


export default function DashPage() {
    let name = localStorage.getItem('name')
    let email = localStorage.getItem('email')
    let id = localStorage.getItem('nationalId')
    let url = localStorage.getItem('passportUrl')
  return (
    <div>
        <header>
            <nav>
                <ul className="nav-bar">
                    <li className="nav-item"><a href="dashboard.html">Home</a></li>
                    <li className="nav-item"><a href="political_parties.html">Parties</a></li>
                    <li className="nav-item"><a href="offices.html">Offices</a></li>
                    <li className="nav-item"><a href="interest.html">Interest</a></li>
                    <li className="nav-item"><a href="votes.html">Your Votes</a></li>
                    <li className="nav-item"><a href="#" onclick="logout()">Logout</a></li>
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
                        <img src="${url}" alt="passport"/>
                        <p><span>Name: </span>{ name }</p>
                    </li>
                    <li>
                        <i class="fas fa-id-card fa-10x"></i>
                        <p><span>ID Number:</span>{ id }</p>
                    </li>
                    <li>
                        <i class="fas fa-envelope fa-10x"></i>
                        <p><span>Email: </span>{ email }</p>
                    </li>
                    </ul>
                </div> 
            </section>
        </main>
    </div>
  )
}

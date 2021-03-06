import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

class HomePage extends Component {
  render() {
    return (
        <div data-test="component-homepage">
            <div className="body">
                <header>
                    <div id="content-header">
                        <div className="bg-image">
                            <h1>POLITICO</h1>
                        </div>
                        <div className="content-wrapper">
                                <h3>New Leader, New Vision, New Direction.</h3>
                        </div>
                    </div>
                </header>
                <main id="main">
                    <section data-test = "component-section" id="section-a" className="grid-a">
                        <ul className="info">
                            <li>
                                <div className="card">
                                    <img src="https://images.pexels.com/photos/984539/pexels-photo-984539.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Sign up  image"/>
                                    <div className="card-content">
                                        <p>Please sign up to use be able to cast your vote in this year's general elections.</p>
                                        <Link to="/signup"> Sign Up here </Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="card">
                                    <img src="https://st2.depositphotos.com/1853861/7036/v/950/depositphotos_70366405-stock-illustration-login-button-icon.jpg"/>
                                    <div className="card-content">
                                        <p>If you have already registered before then use the link below to log in to your account.</p>
                                        <Link to="/login"> Login here </Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="card">
                                    <img src="https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="vote wisely image"/>
                                    <div className="card-content">
                                        <p>Once you are logged in, you will be able to view all candidates that are running for a particular office in the government. You should also be able to cast your vote <b>only once</b>.Cast your vote wisely, you are about to select our future leaders.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>
                </main>
            </div>
        </div>
    )
  }
}

export default HomePage

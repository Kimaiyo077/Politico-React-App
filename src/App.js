import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Dashbooard from './components/Dashboard'
import Office from './components/Office'

class App extends Component {
    render(){
        return(
        <div>
            <BrowserRouter>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/signup" component={Signup}></Route>
                <Route exact path="/dashboard" component={Dashbooard}></Route>
                <Route exact path="/offices" component={Office}></Route>
            </BrowserRouter>
        </div>);
    }
}

export default App;
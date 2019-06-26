import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/dashboard/Home';
import Dashboard from './components/dashboard/Dashboard';
import Office from './components/offices/Office';
import NewOffice from './components/offices/NewOffice';
import Parties from './components/parties/Parties';


class App extends Component {
    render(){
        return(
                <div data-test="component-app">
                    <BrowserRouter>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/login" component={Login}></Route>
                        <Route exact path="/signup" component={Signup}></Route>
                        <Route exact path="/dashboard" component={Dashboard}></Route>
                        <Route exact path="/offices" component={Office}></Route>
                        <Route exact path="/office" component={NewOffice}></Route>
                        <Route exact path="/parties" component={Parties}></Route>
                    </BrowserRouter>
                </div>
            );
    }
}

export default App;
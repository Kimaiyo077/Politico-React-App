import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Office from './components/Office';
import NewOffice from './components/NewOffice';


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
                    </BrowserRouter>
                </div>
            );
    }
}

export default App;
import React, { Component } from 'react';
import LoginForm from '../../containers/LoginForm';

class Login extends Component {
    render() {
        return(
            <div data-test="component-login">
                <LoginForm />
            </div>
        )
    }
}

export default Login;

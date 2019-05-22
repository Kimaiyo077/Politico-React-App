import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import '../styles/forms.css';
import '../styles/style.css';

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state={
            email: "",
            password: ""
        };

        this.emailHandler = this.emailHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
        this.signInHandler = this.signInHandler.bind(this);
    }

    emailHandler(event) {
        this.setState({
          email: event.target.value
        });
    }
    
    passwordHandler(event) {
        this.setState({
          password: event.target.value
        });
    }

    signInHandler(event){
        event.preventDefault()
    
        const { email, password } = this.state;

        fetch('https://isaac-politico-api-heroku.herokuapp.com/api/v2/auth/login',{
            method : 'POST',
            headers : {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type':'application/json'
            },
            body : JSON.stringify({
                email,
                password
            })
        })
    
            .then((res) => {
                return res.json()
            })
    
            .then((data) => {
                let statusCode = data.status
    
                if (statusCode == 200){
                    let token = data.token
                    let email = data.User.email
                    let name = data.User.firstname + ' ' + data.User.lastname
                    let nationalId = data.User.nationalId
                    let userId = data.User.userId
                    let passportUrl = data.User.passportUrl
                    localStorage.setItem('token', token)
                    localStorage.setItem('email', email)
                    localStorage.setItem('name', name)
                    localStorage.setItem('nationalId', nationalId)
                    localStorage.setItem('userId', userId)
                    localStorage.setItem('passportUrl', passportUrl)
    
                    if (email == 'admin@admin.com'){
                        this.props.history.push("/dashboard");
                    }else{
                        this.props.history.push("/dashboard");
                    }
                }
                else{
                    confirm(data.error)
                }
            })
            .catch((err) => console.log('Politico says ' + err))
    }

    render() {
        return (
                <div>
                    <main>
                        <section id="section-c">
                            <div className="content-header">
                                <h3>Sign In</h3>
                            </div>
                            <form id="signin" className="grid" onSubmit={this.signInHandler}>
                                <div className="form">
                                    <input id="email" type="email" name="email" placeholder="Email" 
                                            value={this.state.email}
                                            onChange={this.emailHandler}/>
                                </div>
                                <br></br>
                                <div className="form">
                                    <input id="password" type="password" name="password" placeholder="Password"
                                           value={this.state.password}
                                           onChange={this.passwordHandler}/>
                                </div>
                                <br></br>
                                <div>
                                    <input type="submit" value="Sign in"/>
                                </div>
                                <div>
                                    <p> Don't have an Account?{" "}<Link to="/signup" className="ml-2"> Sign Up here </Link></p>
                                </div>
                            </form>
                        </section>
                    </main>
                </div>
        )
    }
}

export default withRouter(LoginForm);

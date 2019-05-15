import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../styles/forms.css';
import '../styles/style.css';

class SIgnupForm extends Component {
    constructor(props){
        super(props);
        this.state={
            nationalId: "",
            firstname: "",
            lastname: "",
            othername: "",
            email: "",
            phoneNumber: "",
            passportUrl: "",
            password: "",
            confirmPassword: ""
        };

        this.nationalIdHandler = this.nationalIdHandler.bind(this);
        this.firstnameHandler = this.firstnameHandler.bind(this);
        this.lastnameHandler = this.lastnameHandler.bind(this);
        this.othernameHandler = this.othernameHandler.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        this.phoneNumberHandler = this.phoneNumberHandler.bind(this);
        this.passportUrlHandler = this.passportUrlHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
        this.confirmPasswordHandler = this.confirmPasswordHandler.bind(this);
        this.signUpHandler = this.signUpHandler.bind(this);
    }

    nationalIdHandler(event) {
        this.setState({
          nationalId: event.target.value
        });
    }

    firstnameHandler(event) {
        this.setState({
          firstname: event.target.value
        });
    }

    lastnameHandler(event) {
        this.setState({
          lastname: event.target.value
        });
    }

    othernameHandler(event) {
        this.setState({
          othername: event.target.value
        });
    }

    emailHandler(event) {
        this.setState({
          email: event.target.value
        });
    }

    phoneNumberHandler(event) {
        this.setState({
          phoneNumber: event.target.value
        });
    }

    passportUrlHandler(event) {
        this.setState({
          passportUrl: event.target.value
        });
    }
    
    passwordHandler(event) {
        this.setState({
          password: event.target.value
        });
    }

    confirmPasswordHandler(event) {
        this.setState({
          confirmPassword: event.target.value
        });
    }

    signUpHandler(event) {
        event.preventDefault();
        const {
            nationalId,
            firstname,
            lastname,
            othername,
            email,
            phoneNumber,
            passportUrl,
            password
        } = this.state;

        let userData = {
            nationalId,
            firstname,
            lastname,
            othername,
            email,
            phoneNumber,
            passportUrl,
            password
            }

        fetch('https://isaac-politico-api-heroku.herokuapp.com/api/v2/auth/signup',{
            method : 'POST',
            headers : {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type':'application/json'
            },
            body : JSON.stringify(userData)
        })
    
            .then((res) => {
                return res.json()
            })
    
            .then((data) => {
                let statusCode = data.status
    
                if (statusCode == 201){
                    let token = data.token
                    let userId = data.User.userId
                    let email = userData.email
                    let name = userData.firstname + ' ' + userData.lastname
                    let passportUrl = userData.passportUrl
                    let nationalId = userData.nationalId
                    localStorage.setItem('token', token)
                    localStorage.setItem('email', email)
                    localStorage.setItem('name', name)
                    localStorage.setItem('nationalId', nationalId)
                    localStorage.setItem('userId', userId)
                    localStorage.setItem('passportUrl', passportUrl)
                    this.props.history.push("/login");
                }
            })
            .catch((err) => console.log(err))
    }
    

    render() {
        return (
            <div>
                <main>
                    <section id="section-b">
                        <div className="content-header">
                            <h3>Sign Up Form</h3>
                        </div>
                        <h2 id="message"></h2>
                        <form id="signup" className="grid" onSubmit={this.signUpHandler}>
                            <div className="form">
                                <input type="number" name="id" id="id" placeholder="ID Card Number"
                                        value={this.state.nationalId}
                                        onChange={this.nationalIdHandler}/>
                            </div>
                            <br/>
                            <div className="form">
                                <input type="text" name="first-name" id="first-name" placeholder="First Name"
                                        value={this.state.firstname}
                                        onChange={this.firstnameHandler}/>
                            </div>
                            <br/>
                            <div className="form">
                                <input type="text" name="last-name" id="last-name" placeholder="Last Name"
                                        value={this.state.lastname}
                                        onChange={this.lastnameHandler}/>
                            </div>
                            <br/>
                            <div className="form">
                                <input type="text" name="other-name" id="other-name" placeholder="Other Name"
                                        value={this.state.othername}
                                        onChange={this.othernameHandler}/>
                            </div>
                            <br/>
                            <div className="form">
                                <input type="email" name="email" id="email" placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.emailHandler}/>
                            </div>
                            <br/>
                            <div className="form">
                                <input type="number" name="number" id="number" placeholder="Phone Number"
                                        value={this.state.phoneNumber}
                                        onChange={this.phoneNumberHandler}/>
                            </div>
                            <br/>
                            <div className="form">
                                <input type="url" name="passport-url" id="passport-url" placeholder="Passport Url"
                                        value={this.state.passportUrl}
                                        onChange={this.passportUrlHandler}/>
                            </div>
                            <br/>
                            <div className="form">
                                <input type="password" name="password" id="password" placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.passwordHandler}/>
                            </div>
                            <br/>
                            <div>
                                <input type="password" name="password" id="verify-password" placeholder="Verify Password"
                                        value={this.state.confirmPassword}
                                        onChange={this.confirmPasswordHandler}/>
                            </div>
                            <br/>
                            <div>
                                <input type="submit" value="Sign Up"/>
                            </div>
                            <div>
                                <p> Already Have An Account?{" "}<Link to="/login" className="ml-2"> Sign In </Link></p>
                            </div>
                        </form>
                    </section>
                </main>
            </div>
        )
    }
}

export default withRouter(SIgnupForm)
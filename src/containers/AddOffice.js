import React, { Component } from 'react';
import  { connect } from 'react-redux'; 

import { addOffice } from '../redux/actions/postActions'; 
import '../styles/forms.css';
import '../styles/style.css'; 


export class AddOffice extends Component {
    constructor(props){
        super(props);
        this.state={
            name: "",
            type: ""
        };

        this.typeHandler = this.typeHandler.bind(this);
        this.nameHandler = this.nameHandler.bind(this);
        this.addOfficeHandler = this.addOfficeHandler.bind(this);
    }

    typeHandler(event) {
        this.setState({
          type: event.target.value
        });
    }
    
    nameHandler(event) {
        this.setState({
          name: event.target.value
        });
    }

    addOfficeHandler(event){
        event.preventDefault()
    
        const office = {
            name : this.state.name,
            type : this.state.type
        }

        this.props.addOffice(office)
    }
    render() {
        return ( 
            <div data-test="component-office">
                <div>
                    <main>
                        <section id="section-b">
                            <div className="content-header">
                                <h3>New Government Office</h3>
                            </div>
                            <form data-test="form-submit" onSubmit={this.addOfficeHandler} className="grid" id="newOffice">
                                <div className="form">
                                    <input type="text" id="officeName" name="name" placeholder="Office Name"
                                    data-test="name-input"
                                    value={this.state.name}
                                    onChange={this.nameHandler}/>
                                </div>
                                <br/>
                                <div className="form">
                                    <input type="text" id="officeType" name="type" placeholder="Office Type"
                                    data-test="type-input"
                                    value={this.state.type}
                                    onChange={this.typeHandler}/>
                                </div>
                                <br/>
                                <div>
                                    <input type="submit" id="submit" placeholder="Submit"/>
                                </div>
                            </form>
                            </section>
                    </main>
                </div>
            </div>
        )
    }
}

export default connect(null, { addOffice })(AddOffice );

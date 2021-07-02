import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './Auth.css'

export default class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (

        <div className="login-page">
            <div className="form">

                <form className="login-form" onSubmit={this.handleSubmit}>
                    <input type="text" id='email' placeholder="username"/>
                    <input type="password" id='password' placeholder="password"/>
                    <button>login</button>
                    <p className="message">Not registered? <Link to="/signup">Create an account</Link></p>
                </form>
            </div>
        </div>
        )
    }
}


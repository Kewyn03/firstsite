import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from "axios";
import './Auth.css'

export default class SignUp extends Component {
    state = {
        login: '',
        password: '',
        email: '',



    }
    alertSuccess = () => {
    <div className="alert alert-success" role="alert">
        A simple success alert—check it out!
    </div>

}
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://60e5c694086f730017a6fdf1.mockapi.io/users',this.state)
    }

    render() {
        return (
            <div className="login-page">
                <div className="form">
                    <form className="register-form" onSubmit={this.handleSubmit}>
                        <input type="text" id='login' placeholder="login" onChange={this.handleChange}/>
                        <input type="password" id='password' placeholder="password" onChange={this.handleChange}/>
                        <input type="text" id='email' placeholder="email address" onChange={this.handleChange}/>
                        <button onClick={this.alertSuccess}>create
                        </button>


                        <p className="message">Already registered? <Link to="/signin">Sign In</Link></p>
                    </form>
                </div>
            </div>
        )
    }
}


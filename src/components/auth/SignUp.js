import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import fire from '../../fire'
import './Auth.css'

export default class SignUp extends Component {
    state = {
        firstName: '',
        password: '',
        email: '',



    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        fire.post('/create.json',this.state)
    }

    render() {
        return (
            <div className="login-page">
                <div className="form">
                    <form className="register-form" onSubmit={this.handleSubmit}>
                        <input type="text" id='firstName' placeholder="name" onChange={this.handleChange}/>
                        <input type="password" id='password' placeholder="password" onChange={this.handleChange}/>
                        <input type="text" id='email' placeholder="email address" onChange={this.handleChange}/>
                        <button>create</button>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <p className="message">Already registered? <Link to="/signin">Sign In</Link></p>
                    </form>
                </div>
            </div>
        )
    }
}


import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import database from "../../database";
import './Auth.scss'

export default class SignUp extends Component {
    state = {
        login: '',
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

        database.post('users', this.state)





    }

    render() {
        if (this.state.loggedIn) {
           return <Redirect to="/" />
        }
        return (

            <div className="login-page">
                <div className="form">
                    <form className="register-form" onSubmit={this.handleSubmit}>
                        <input type="text" id='login' placeholder="login" onChange={this.handleChange} required="required"/>
                        <input type="password" id='password' placeholder="password" onChange={this.handleChange} required="required"/>
                        <input type="text" id='email' placeholder="email address" onChange={this.handleChange} required="required"/>
                        <button>create
                        </button>


                        <p className="message">Already registered? <Link to="/signin">Sign In</Link></p>
                    </form>
                </div>
            </div>
        )
    }
}


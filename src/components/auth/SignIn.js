import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import database from '../../database'
import {Redirect} from 'react-router-dom'
import './Auth.scss'
import { useAuth } from "../context/authcontext";




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
        database.post('login', this.state).then(res => {
            this.setState({
                loggedIn : true
            })
        })

    }

    render() {

        if (this.state.loggedIn) {
            return <Redirect to='/'/>
        }
            return (

                <div className="login-page">
                    <div className="form">

                        <form className="login-form" onSubmit={this.handleSubmit}>
                            <input type="text" id='email' placeholder="username" required="required"/>
                            <input type="password" id='password' placeholder="password" required="required"/>
                            <button>login</button>
                            <p className="message">Not registered? <Link to="/signup">Create an account</Link></p>
                        </form>
                    </div>
                </div>
            )
        }

}


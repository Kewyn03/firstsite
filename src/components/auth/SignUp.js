import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import './Auth.scss'
import { useAuth } from "../context/authcontext";


export default function SignUp() {


    const {signup} = useAuth()
    const {loggedIn} = useAuth()

    const [state,setState] = React.useState({
        login: '',
        password: '',
        email: '',
    })


    const handleChange = (e) => {

        setState({
            ...state,
            [e.target.id]: e.target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        signup(state)
    }





        if (loggedIn) {
           return <Redirect to='/' />
        } else {
            return (


                <div className="login-page">
                    <div className="form">
                        <form className="register-form">
                            <input type="text" id='login' placeholder="login" onChange={handleChange}
                                   required="required"/>
                            <input type="password" id='password' placeholder="password" onChange={handleChange}
                                   required="required"/>
                            <input type="text" id='email' placeholder="email address" onChange={handleChange}
                                   required="required"/>
                            <button onClick={handleSubmit}>create
                            </button>


                            <p className="message">Already registered? <Link to="/signin">Sign In</Link></p>
                        </form>
                    </div>
                </div>

            )
        }



}


import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import './Auth.scss'
import { useAuth } from "../context/authcontext";


export default function SignIn() {

    const [state,setState] = React.useState({
        login: '',
        password: '',
    })

    const {login} = useAuth()
    const {loggedIn} = useAuth()


    const handleChange = (e) => {

        setState({
            ...state,
            [e.target.id]: e.target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        login(state)



        // isAdmin(state)

    }

        if (loggedIn) {
            return <Redirect to='/' />
        }
        else {
            return (

                <div className="login-page">
                    <div className="form">

                        <form className="login-form">
                            <input type="text" id='login' placeholder="login" onChange={handleChange}
                                   required="required"/>
                            <input type="password" id='password' placeholder="password" onChange={handleChange}
                                   required="required"/>
                            <button onClick={handleSubmit}>login</button>
                            <p className="message">Not registered? <Link to="/signup">Create an account</Link></p>
                        </form>
                    </div>
                </div>
            )
        }


}


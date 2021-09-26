import React from 'react'
import { Link } from 'react-router-dom'
import './Auth.scss'
import { useAuth } from "../context/authcontext";


function SignLinks() {

    const {loggedIn} = useAuth()
    const {logout} = useAuth()

    return (loggedIn) ? (

        <span className='right'>
            <ul className=" navbar-nav align-items-baseline ">
                <button className='button-logout wrap' onClick={logout}><Link to='/' className='link'>Log Out</Link></button>

            </ul>
        </span>

    ) : (
        <span className='right'>
            <ul className="navbar-nav">
                <button className='button-signup wrap'><Link to='/signup' className='link'>Sign up</Link></button>
                <button className='button-login wrap'><Link to='/signin' className='link'>Login</Link></button>

            </ul>
        </span>
    )
}


export default SignLinks
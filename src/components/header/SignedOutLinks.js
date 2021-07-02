import React from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'

const SignedOutLinks = () => {
    return (
        <span className='right'>
            <ul className="navbar-nav">
                <li className='button-signup wrap'><Link to='/signup' className='nav-link'>Sign up</Link></li>
                <li className='button-login wrap'><Link to='/signin' className='nav-link'>Login</Link></li>
            </ul>
        </span>
    )
}

export default SignedOutLinks
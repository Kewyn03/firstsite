import React from 'react'
import { NavLink } from 'react-router-dom'
import './Auth.css'
const SignedInLinks = () => {
    return (
        <span className='right'>
            <ul className=" navbar-nav align-items-baseline ">
                {/*<li className=' '><NavLink to='/'>New Project</NavLink></li>*/}
                <li className='button-logout wrap  '><NavLink to='/' className='nav-link'>Log Out</NavLink></li>
                {/*<li><NavLink to='/' className="btn btn-floating pink lighten-1">NN</NavLink></li>*/}
            </ul>
        </span>
    )
}

export default SignedInLinks